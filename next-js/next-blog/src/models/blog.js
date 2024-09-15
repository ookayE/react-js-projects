import mongoose from "mongoose";

// Define schema - defining the structure of data we're storing in MongoDB
const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Checking if the Blog model is already created (Mongoose caches models)
// If it's already defined in mongoose.models, it will reuse it
// Otherwise, it creates a new model with the name 'Blog' based on the BlogSchema
const blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default blog;
