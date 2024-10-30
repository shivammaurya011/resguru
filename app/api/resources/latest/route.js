import connectToDatabase from "@/lib/mongodb";
import Resource from "@/models/resource";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const latestNews = await Resource.find({ 
      status: 'published' 
    })
    .sort({ createdAt: -1 })
    .limit(6)
    .select('title slug summary category createdAt author tags');
    
    return NextResponse.json(latestNews);
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return NextResponse.json(
      { error: "Failed to fetch latest news" },
      { status: 500 }
    );
  }
} 