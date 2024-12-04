import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true); //ensures only fields specified in schema will be saved to db

  //if database already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  //connect to MongoDB

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
