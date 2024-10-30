import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
    }

    const collection = db.collection('posts');
    
    // Get total count
    const count = await collection.countDocuments();
    
    // Get a sample document
    const sample = await collection.findOne({});
    
    return NextResponse.json({
      status: 'success',
      count,
      sampleDocument: sample ? {
        id: sample._id,
        type: sample.type,
        slug: sample.slug,
        title: sample.title
      } : null
    });
    
  } catch (error) {
    return NextResponse.json({ 
      error: 'API Error',
      message: error.message 
    }, { 
      status: 500 
    });
  }
} 