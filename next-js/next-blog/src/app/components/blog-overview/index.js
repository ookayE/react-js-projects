"use client";

import AddNewBlog from "@/components/add-new-blog";
import { useState } from "react";

const initialBlogFormData = {
  title: "",
  description: "",
};

function BlogOverview() {
  //managing all our states in blogOverview
  const [openBlogDialogue, setOpenBlogDialogue] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [loading, setLoading] = useState(false);

  console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const request = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });

      const response = await request.json();

      if (response?.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialogue(false);
        setLoading(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      {/* passing all our states to our AddNewBlog component */}
      <AddNewBlog
        openBlogDialogue={openBlogDialogue}
        setOpenBlogDialogue={setOpenBlogDialogue}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
    </div>
  );
}
export default BlogOverview;
