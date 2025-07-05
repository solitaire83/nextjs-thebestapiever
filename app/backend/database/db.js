import { MongoClient } from 'mongodb';
import colors from "../utils/ConsoleColors.js";
import CONFIG from "../../cfg.js";

const DATABASE = 'teste';

let CLIENTCACHE = null;
let DBCACHE = null;

async function connectDB() {
  if(CLIENTCACHE && DBCACHE) {
    return DBCACHE;
  }

  try {
    if (!CLIENTCACHE) {
      CLIENTCACHE = new MongoClient(CONFIG.DB, {}); // *de adaugat niste optiuni / https://www.mongodb.com/docs/drivers/node/current/connect/connection-options/#std-label-node-connection-options
      
      await CLIENTCACHE.connect();
      // console.log(`${colors.green}[DB]${colors.reset}: Connected successfully!`);
    }

    DBCACHE = CLIENTCACHE.db(DATABASE);
    return DBCACHE;

  } catch(e) {
    console.error(`${colors.red}[DB]${colors.reset}: err connecting to the database:`, e);
    CLIENTCACHE = null;
    DBCACHE = null;
    throw e;
  }
}

let MAXCONNS = null;

async function ensureDB() { // for routes
  if(CLIENTCACHE && DBCACHE) {
    return DBCACHE;
  }
  
  if(!MAXCONNS) {
    MAXCONNS = connectDB();
  }
  return MAXCONNS;
}

export { connectDB, ensureDB };
