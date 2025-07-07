'use client';
import { useStats } from '../hooks/useStats';

import CONTENT from '../components/content';
import LOADINGCASE from '../components/loading';
import SHOWERROR from '../components/error';

export default function STATS() {
  const {stats, loading, error} = useStats();

  if(loading) {
    return <LOADINGCASE/>;
  }

  if(error) {
    return <SHOWERROR error={error}/>;
  }

  return <CONTENT stats={stats}/>;
}
