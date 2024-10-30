import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import { startOfDay, startOfMonth, subMonths } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectToDatabase();

    const today = startOfDay(new Date());
    const thisMonth = startOfMonth(new Date());
    const lastMonth = startOfMonth(subMonths(new Date(), 1));

    const [totalCount, todayCount, thisMonthCount, lastMonthCount] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ createdAt: { $gte: today } }),
      User.countDocuments({ createdAt: { $gte: thisMonth } }),
      User.countDocuments({
        createdAt: { $gte: lastMonth, $lt: thisMonth }
      })
    ]);

    // Calculate month-over-month change
    const change = lastMonthCount === 0 
      ? 100 
      : (((thisMonthCount - lastMonthCount) / lastMonthCount) * 100).toFixed(1);

    // Get role distribution
    const roleDistribution = await User.aggregate([
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    return NextResponse.json({
      total: totalCount,
      today: todayCount,
      thisMonth: thisMonthCount,
      lastMonth: lastMonthCount,
      change: Number(change),
      roleDistribution
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch user stats' },
      { status: 500 }
    );
  }
} 