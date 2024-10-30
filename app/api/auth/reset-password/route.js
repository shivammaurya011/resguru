import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/user';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    await connectToDatabase();
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ message: 'Password reset token is invalid or has expired.' }, { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return NextResponse.json({ message: 'Your password has been reset successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}