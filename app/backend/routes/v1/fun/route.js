import {NextResponse} from 'next/server';
import path from 'path';
import CONFIG from '@/app/cfg.js';

import __FILTERCONTENT from '../../../utils/ContentFilter';

export async function GET() {
        const DIR = path.join(process.cwd(), 'public', 'storage', 'hi');
        const CONTENT = await __FILTERCONTENT(DIR);
                
        if(CONTENT.length === 0)
            return NextResponse.json(
                {error: 'no images found, sry..'},
                {status: 404}
            );
        
        
        const __RANDOMIZE = Math.floor(Math.random() * CONTENT.length);
        const RANDOM = CONTENT[__RANDOMIZE];

        const DIRNAME = path.basename(DIR);
        const RESULT = `${CONFIG.STORAGELINK}/${DIRNAME}/${RANDOM}`;
        
        return NextResponse.json({[DIRNAME]: RESULT});
}