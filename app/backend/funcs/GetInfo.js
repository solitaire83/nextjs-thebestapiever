import { ensureDB } from "../database/db";

async function GetStats(route = null) {
    const db = await ensureDB();
    const coll = db.collection('STATS');
    
    if(route) {
      return await coll.findOne({ route });
    } 
    
    else {
      return await coll.find({}).toArray();
    }
}

async function GetRequests() { // totalrequests
        const db = await ensureDB();
        const coll = db.collection('STATS');
        
        const agregat = [
        {
            $group: {
            _id: null,
            REQS: {$sum: '$REQUESTS'}
            }
        }
        ];
        
        const r = await coll.aggregate(agregat).toArray();
        return r.length > 0 ? r[0].REQS : 0;
}

export {GetStats, GetRequests};