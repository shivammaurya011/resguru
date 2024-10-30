import connectToDatabase from "@/lib/mongodb";
import Resource from "@/models/resource";
import { NextResponse } from "next/server";

connectToDatabase();

export async function GET(request, { params }) {
  try {
    const resource = await Resource.findOne({ slug: params.slug }).populate('author', 'name email');
    if (!resource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }

    await Resource.findOneAndUpdate(
      { slug: params.slug },
      { $inc: { views: 1 } }
    );

    return NextResponse.json({
      ...resource.toJSON(),
      views: resource.views + 1
    });
  } catch (error) {
    console.error('Error fetching resource:', error);
    return NextResponse.json(
      { error: "Failed to fetch resource" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    
    const updatedResource = await Resource.findOneAndUpdate(
      { slug: params.slug },
      data,
      { new: true }
    );

    if (!updatedResource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedResource);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update resource" },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedResource = await Resource.findOneAndDelete({ slug: params.slug });
    if (!deletedResource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Resource deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete resource" },
      { status: 500 }
    );
  }
}
