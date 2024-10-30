"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import CareerForm from '../_components/CareerForm';

export default function CreateCareerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/careers', formData);
      
      if (response.data) {
        router.push('/dashboard/career');
        router.refresh(); // Ensure the list is refreshed
      }
    } catch (error) {
      console.error('Error creating career:', error);
      alert('Error creating career: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CareerForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
} 