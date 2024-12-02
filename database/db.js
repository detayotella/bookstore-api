import mongoose from "mongoose";

export const connectToDB = async() => { 
    try {
        // Connect to MongoDB using the connection string
        await mongoose.connect(process.env.MONGO_URI); 
        console.log(`mongodb is connected successfully`); 

    } catch(error) {
        console.error(`mongodb connection failed ${error}`); 
        // Optionally exit the process if the connection fails
        process.exit(1); 
    }
}