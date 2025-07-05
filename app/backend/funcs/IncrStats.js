import { ensureDB } from "../database/db";

import colors from "../utils/ConsoleColors";
import { Update } from "../utils/UpdateColl";
import { DateFormat } from "../utils/DateFormat";

export async function IncrementStats(route) {
  try {
    const db = await ensureDB();
    const coll = db.collection('STATS');
    
    const filter = {ROUTE:route}
    const update = {
      $inc: {REQUESTS: 1},
      $set: {LAST_ACCESS_AT: DateFormat()}
    };
    const options = {upsert: true}

    const r = await Update(coll, filter, update, options)
    return r;
    
  }catch(e) {
    console.error(`${colors.red}[INCREMENT]${colors.reset}: Failed to increment for the route ${route}:`, e);
    
    // preventiv
    return null;
  }
}