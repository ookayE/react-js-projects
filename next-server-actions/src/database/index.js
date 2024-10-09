import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://ookayE:crVGZcAXDYstKkfv@evancluster.ahnl3t3.mongodb.net/";

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true, // Optional, to ensure compatibility
      useUnifiedTopology: true, // Optional, for better connection management
    });
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDB;
