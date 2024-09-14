import mongoose from "mongoose";

const connectToDb = async () => {
  const connectionUrl =
    "mongodb+srv://ookayE:crVGZcAXDYstKkfv@evancluster.ahnl3t3.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("connection successful"))
    .catch((error) => console.log(error));
};

export default connectToDB;
