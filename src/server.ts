import mongoose from "mongoose";
import app from "./app";

// Database connection
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("Database connected");
    // Start server
    app.listen(5000, () => {
      console.log("Example app listening on port 5000!");
    });
  } catch (error) {
    console.log("Database connection failed");
  }
}
connectDB();
