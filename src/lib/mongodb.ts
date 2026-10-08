// Serviço/Biblioteca de conexão com o MongoDB
import mongoose from "mongoose";

// Pega os dados da .env para o MongoDB
const MONGODB_URI = process.env.DATABASE_URL;

if(!MONGODB_URI){
    throw new Error("Por favor, defina a DATABASE_URL no arquivo .env");
}

let cached = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {conn: null, promise: null};
}

async function connectMongo() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then(() => {
            console.log("Conectando ao MongoDB");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default connectMongo;

