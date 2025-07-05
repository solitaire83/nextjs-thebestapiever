import {NextResponse} from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import CONFIG from '@/app/cfg.js';

export async function GET() {
        const DIR = path.join(process.cwd(), 'public', 'storage', 'fun');
        const READ = await fs.readdir(DIR);
    
        const CONTENT = READ.filter(c => 
            c.toLowerCase().endsWith('.gif') || 
            c.toLowerCase().endsWith('.png') || 
            c.toLowerCase().endsWith('.jpg') || 
            c.toLowerCase().endsWith('.jpeg')
        );
        
        if(CONTENT.length === 0)
            return NextResponse.json(
                {status: 404},
                {error: 'no images found, sry..'}
            );
        
        
        const __RANDOMIZE = Math.floor(Math.random() * CONTENT.length);
        const RANDOM = CONTENT[__RANDOMIZE];

        const DIRNAME = path.basename(DIR);
        const RESULT = `${CONFIG.STORAGELINK}/${DIRNAME}/${RANDOM}`;
        
        return NextResponse.json({[DIRNAME]: RESULT});
}