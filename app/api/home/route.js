import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/career";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Fetch data for different sections in parallel
    const [
      latestJobs,
      latestResults,
      admitCards,
      answerKeys,
      syllabusData,
      admissionPosts,
      sarkariSchemes,
      importantInfo,
      upcomingForms
    ] = await Promise.all([
      Career.find({ type: 'job', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'result', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'admitCard', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'answerKey', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'syllabus', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'admission', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ type: 'scheme', status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ status: 'published' }).sort({ 'dates.startDate': -1 }).limit(5),
      Career.find({ status: 'published', 'dates.startDate': { $gt: new Date() } })
        .sort({ 'dates.startDate': 1 })
        .limit(5)
    ]);

    return NextResponse.json({
      latestJobs,
      latestResults,
      admitCards,
      answerKeys,
      syllabusData,
      admissionPosts,
      sarkariSchemes,
      importantInfo,
      upcomingForms
    });
  } catch (error) {
    console.error('Error fetching home data:', error);
    return NextResponse.json(
      { error: "Failed to fetch home data" },
      { status: 500 }
    );
  }
} 