import { useState, useEffect } from 'react';
import UserResponse from '../types';

export const useUser = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/v1/information");
        if (!res.ok) throw new Error('Failed to fetch user');
        const data: UserResponse = await res.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};