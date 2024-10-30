// app/api/careers/[slug]/route.js
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/career";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

connectToDatabase();

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    
    console.log('Fetching career with slug:', params.slug);
    
    const career = await Career.findOne({ slug: params.slug })
      .populate({
        path: 'author',
        select: 'name email image role department'
      });

    console.log('Found career:', career);
    console.log('Author data:', career?.author);

    if (!career) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }

    career.views = (career.views || 0) + 1;
    await career.save();

    return NextResponse.json(career);
  } catch (error) {
    console.error('Error in GET route:', error);
    throw error;
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: "Unauthorized - Admin access required" },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate status
    if (data.status && !['draft', 'published', 'archived'].includes(data.status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    // Validate image URL if provided
    if (data.image && !/^https?:\/\/.+/.test(data.image)) {
      return NextResponse.json(
        { error: "Invalid image URL" },
        { status: 400 }
      );
    }

    // Validate dates if provided
    if (data.dates) {
      const startDate = new Date(data.dates.startDate);
      const endDate = new Date(data.dates.endDate);
      if (startDate > endDate) {
        return NextResponse.json(
          { error: "Start date must be before or equal to end date" },
          { status: 400 }
        );
      }
    }

    // Validate related careers limit
    if (data.relatedCareers && data.relatedCareers.length > 5) {
      return NextResponse.json(
        { error: "Cannot have more than 5 related careers" },
        { status: 400 }
      );
    }

    const updatedCareer = await Career.findOneAndUpdate(
      { slug: params.slug },
      data,
      { new: true, runValidators: true }
    ).populate({
      path: 'author',
      select: 'name email image role department'
    });

    if (!updatedCareer) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedCareer);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: "Validation error", details: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to update career" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedCareer = await Career.findOneAndDelete({ slug: params.slug });
    if (!deletedCareer) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Career deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete career" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: "Unauthorized - Admin access required" },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate status if it's being updated
    if (data.status && !['draft', 'published', 'archived'].includes(data.status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    const updatedCareer = await Career.findOneAndUpdate(
      { slug: params.slug },
      data,
      { new: true, runValidators: true }
    );

    if (!updatedCareer) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedCareer);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update career" },
      { status: 500 }
    );
  }
}
