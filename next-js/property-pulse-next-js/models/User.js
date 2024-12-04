import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already in use"],
      required: [true, "Email is required"],
    },

    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    //automatically adds 'createdAt' and 'updatedAt' fields to documents
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
