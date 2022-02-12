import{ Db, MongoClient } from 'mongodb';

interface ConnectType {
    db: Db;
    client: MongoClient;
}

const uri: any = process.env.DATABASE_URL
const dbName: any = process.env.MONGODB_DB

let cachedClient: MongoClient;
let cachedDb: Db;

if (!uri) {
    throw new Error(
        'Please define the DATABASE_URL environment'
    )
}

if (!dbName) {
    throw new Error(
        'Please define the MONGODB_DB environment'
    )
}

const options: any = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

export default async function connect(): Promise<ConnectType> {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb}
    }

    const client = new MongoClient(uri, options);


    await client.connect();

    const db = await client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return { db, client };
}
