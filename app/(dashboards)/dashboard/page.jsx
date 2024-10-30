'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import UserDashboard from '@/components/dashboard/role/UserDashboard';
import AuthorDashboard from '@/components/dashboard/role/AuthorDashboard';
import AdminDashboard from '@/components/dashboard/role/AdminDashboard';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  if (!session?.user?.role) {
    redirect('/login');
  }

  const { role } = session.user;

  return (
    <>
      {role === 'user' && <UserDashboard />}
      {role === 'author' && <AuthorDashboard />}
      {role === 'admin' && <AdminDashboard />}
      {!['user', 'author', 'admin'].includes(role) && <p>Invalid role</p>}
    </>
  );
}
