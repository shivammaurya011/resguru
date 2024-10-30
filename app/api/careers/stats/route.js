import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/career";
import { startOfDay, startOfMonth, subMonths } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectToDatabase();

    const today = startOfDay(new Date());
    const thisMonth = startOfMonth(new Date());
    const lastMonth = startOfMonth(subMonths(new Date(), 1));

    const [totalCount, todayCount, thisMonthCount, lastMonthCount] = await Promise.all([
      Career.countDocuments(),
      Career.countDocuments({ createdAt: { $gte: today } }),
      Career.countDocuments({ createdAt: { $gte: thisMonth } }),
      Career.countDocuments({
        createdAt: { $gte: lastMonth, $lt: thisMonth }
      })
    ]);

    // Get type distribution
    const typeDistribution = await Career.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    // Get status distribution
    const statusDistribution = await Career.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    // Add tags distribution
    const tagsDistribution = await Career.aggregate([
      { $unwind: "$tags" },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Add average views by type
    const viewsByType = await Career.aggregate([
      {
        $group: {
          _id: "$type",
          averageViews: { $avg: "$views" },
          totalViews: { $sum: "$views" }
        }
      }
    ]);

    const change = lastMonthCount === 0 
      ? 100 
      : (((thisMonthCount - lastMonthCount) / lastMonthCount) * 100).toFixed(1);

    return NextResponse.json({
      total: totalCount,
      today: todayCount,
      thisMonth: thisMonthCount,
      lastMonth: lastMonthCount,
      change: Number(change),
      typeDistribution,
      statusDistribution,
      tagsDistribution,
      viewsByType
    });
  } catch (error) {
    console.error('Error fetching career stats:', error);
    return NextResponse.json(
      { error: "Failed to fetch career statistics" },
      { status: 500 }
    );
  }
} 