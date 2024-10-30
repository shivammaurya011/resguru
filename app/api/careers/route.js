// app/api/careers/route.js
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/career";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import slugify from "slugify";

export async function GET() {
  try {
    await connectToDatabase();
    const careers = await Career.find().sort({ createdAt: -1 });
    return NextResponse.json(careers);
  } catch (error) {
    console.error('Error fetching careers:', error);
    return NextResponse.json(
      { error: "Failed to fetch careers" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const data = await request.json();
    
    // Create a slug from the title
    const baseSlug = slugify(data.title, { lower: true, strict: true });
    
    // Check for existing slugs to avoid duplicates
    const slugExists = await Career.exists({ slug: baseSlug });
    const slug = slugExists 
      ? `${baseSlug}-${Date.now()}`
      : baseSlug;

    // Format the data before saving
    const careerData = {
      ...data,
      slug,
      author: session.user.id, // Add the author ID from the session
      dates: {
        startDate: new Date(data.dates.startDate),
        endDate: new Date(data.dates.endDate)
      },
      tags: Array.isArray(data.tags) ? data.tags : [], // Ensure tags is an array
      status: data.status || 'draft'
    };

    console.log('Saving career data:', careerData); // Debug log

    const career = await Career.create(careerData);
    return NextResponse.json(career);

  } catch (error) {
    console.error('Error creating career:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
