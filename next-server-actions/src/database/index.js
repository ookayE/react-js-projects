import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://ookayE:crVGZcAXDYstKkfv@evancluster.ahnl3t3.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Working"))
    .catch((e) => console.log(e));
};

export default connectToDB;
