'use client';

import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function ViewCounter({ initialViews, slug }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Update views in state when initialViews changes
    setViews(initialViews);
  }, [initialViews]);

  return (
    <div className="flex items-center gap-2">
      <FaEye className="text-blue-500" />
      <span>{views || 0} views</span>
    </div>
  );
} 