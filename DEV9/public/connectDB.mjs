//connectDB.mjs
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected> appConnectDB.mjs");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); 
  }
};

connectDB().catch(console.error);
export default connectDB;