import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB', error);
    }
}

connectToDatabase();
