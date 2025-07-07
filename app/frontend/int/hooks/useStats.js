import { useState, useEffect } from 'react';

export function useStats() {
  const [stats, __STATS] = useState(null);
  const [loading, __LOADING] = useState(true);
  const [error, __SETERR] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        if(!res.ok)
          throw new Error('failed to fetch stats');
        
        const data = await res.json();
        __STATS(data);
        console.log(data);
      }catch(err) {
        __SETERR(err.message);
      }finally {
        __LOADING(false);
      }
    }

    fetchStats();
  }, []);

  return {stats, loading, error};
}
