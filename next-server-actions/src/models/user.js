import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
});

const User = mongoose.models.user || mongoose.model("User", userSchema);

export default User;
