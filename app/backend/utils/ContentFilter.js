import fs from 'fs/promises';

async function __FILTERCONTENT(DIR)
{
    const READ = await fs.readdir(DIR);
    const FILTER = READ.filter(c => 
        c.toLowerCase().endsWith('.gif') || 
        c.toLowerCase().endsWith('.png') || 
        c.toLowerCase().endsWith('.jpg') || 
        c.toLowerCase().endsWith('.jpeg')
    );
    return FILTER;
}

export default __FILTERCONTENT;