// pages/api/auth/forgot-password.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import User from '@/models/user';
import connectToDatabase from '@/lib/mongodb';
import sendEmail from '@/lib/sendEmail';

export async function POST(req) {
  try {
    const { email } = await req.json();

    await connectToDatabase();
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ message: 'A password reset link has been sent to the provided email address if an account exists.' }, { status: 200 });
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;
    
    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: `Dear User,

We have received a request to reset the password for your account.

To proceed with the password reset, please click on the following link or copy and paste it into your browser:

${resetUrl}

This link will expire in 1 hour for security reasons.

If you did not initiate this request, please disregard this email. Your password will remain unchanged.

For any assistance, please contact our support team.

Best regards,
Sarkari Result`,
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json({ message: 'An error occurred while processing your request. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'A password reset link has been sent to the provided email address if an account exists.' }, { status: 200 });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ message: 'An error occurred while processing your request. Please try again later.' }, { status: 500 });
  }
}
