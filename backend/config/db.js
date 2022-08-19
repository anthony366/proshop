import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectURL = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connectURL.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

export default connectDB;
