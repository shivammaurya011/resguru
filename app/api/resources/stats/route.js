import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Resource from "@/models/resource";
import { startOfDay, startOfMonth, subMonths } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectToDatabase();

    const today = startOfDay(new Date());
    const thisMonth = startOfMonth(new Date());
    const lastMonth = startOfMonth(subMonths(new Date(), 1));

    const [totalCount, todayCount, thisMonthCount, lastMonthCount] = await Promise.all([
      Resource.countDocuments(),
      Resource.countDocuments({ createdAt: { $gte: today } }),
      Resource.countDocuments({ createdAt: { $gte: thisMonth } }),
      Resource.countDocuments({
        createdAt: { $gte: lastMonth, $lt: thisMonth }
      })
    ]);

    // Get category distribution
    const categoryDistribution = await Resource.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    // Get status distribution
    const statusDistribution = await Resource.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
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
      categoryDistribution,
      statusDistribution
    });
  } catch (error) {
    console.error('Error fetching resource stats:', error);
    return NextResponse.json(
      { error: "Failed to fetch resource statistics" },
      { status: 500 }
    );
  }
} 