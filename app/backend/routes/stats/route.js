import { NextResponse } from 'next/server';
import { GetStats, GetRequests } from '../../funcs/GetInfo';

export async function GET() {
    const STATS = await GetStats();
    const REQS = await GetRequests();
    
    if (!STATS) {
      return NextResponse.json(
        { error: 'try again later pls' },
        { status: 500 }
      );
    }
    
    const FORMAT = {
      TOTALREQS: REQS,
      STATS: STATS,
    };
    
    return NextResponse.json(FORMAT);
    
}

