"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import CareerForm from '../../_components/CareerForm';

export default function EditCareerPage({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [career, setCareer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await axios.get(`/api/careers/${params.slug}`);
        setCareer(response.data);
      } catch (err) {
        console.error('Error fetching career:', err);
        setError('Failed to load career');
      }
    };

    if (params.slug) {
      fetchCareer();
    }
  }, [params.slug]);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/careers/${params.slug}`, formData);
      
      if (response.data) {
        router.push('/dashboard/career');
        router.refresh(); // Ensure the list is refreshed
      }
    } catch (error) {
      console.error('Error updating career:', error);
      alert('Error updating career: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!career) return <div className="p-4">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <CareerForm 
        initialData={career}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
} 