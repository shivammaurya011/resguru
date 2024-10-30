import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import Career from "@/models/career";
import Resource from "@/models/resource";
import { startOfDay, subDays } from 'date-fns';

export async function GET() {
  try {
    await connectToDatabase();

    // Get date for last 30 days
    const thirtyDaysAgo = subDays(new Date(), 30);

    // Fetch recent activities from different collections
    const [users, careers, resources] = await Promise.all([
      User.find(
        { createdAt: { $gte: thirtyDaysAgo } }
      ).sort({ createdAt: -1 }).populate('role'),
      
      Career.find(
        { createdAt: { $gte: thirtyDaysAgo } }
      ).sort({ createdAt: -1 }).populate('author', 'name'),
      
      Resource.find(
        { createdAt: { $gte: thirtyDaysAgo } }
      ).sort({ createdAt: -1 }).populate('author', 'name')
    ]);

    // Combine and format activities
    const activities = [
      ...users.map(user => ({
        type: 'user',
        action: 'New user registered',
        time: user.createdAt,
        details: `${user.name} (${user.role}) joined the platform`,
        metadata: {
          id: user._id,
          role: user.role,
          email: user.email
        }
      })),

      ...careers.map(career => ({
        type: 'career',
        action: `Career ${career.status}`,
        time: career.createdAt,
        details: career.title,
        metadata: {
          id: career._id,
          type: career.type,
          status: career.status,
          author: career.author?.name || 'System'
        }
      })),

      ...resources.map(resource => ({
        type: 'resource',
        action: `Resource ${resource.status}`,
        time: resource.createdAt,
        details: resource.title,
        metadata: {
          id: resource._id,
          category: resource.category,
          status: resource.status,
          author: resource.author?.name || 'System'
        }
      }))
    ]
    .sort((a, b) => new Date(b.time) - new Date(a.time));

    // Group activities by date
    const groupedActivities = activities.reduce((groups, activity) => {
      const date = new Date(activity.time).toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(activity);
      return groups;
    }, {});

    // Calculate daily stats
    const dailyStats = Object.keys(groupedActivities).map(date => ({
      date,
      total: groupedActivities[date].length,
      users: groupedActivities[date].filter(a => a.type === 'user').length,
      careers: groupedActivities[date].filter(a => a.type === 'career').length,
      resources: groupedActivities[date].filter(a => a.type === 'resource').length
    }));

    return NextResponse.json({
      activities: activities.slice(0, 50), // Last 50 activities
      dailyStats,
      summary: {
        total: activities.length,
        users: users.length,
        careers: careers.length,
        resources: resources.length
      }
    });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { error: "Failed to fetch activities" },
      { status: 500 }
    );
  }
} 
