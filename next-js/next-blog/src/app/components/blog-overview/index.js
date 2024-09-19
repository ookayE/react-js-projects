"use client";

import { Button } from "@/components/ui/button";
import AddNewBlog from "@/components/add-new-blog";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router in App Router
import { Label } from "@radix-ui/react-label";

const initialBlogFormData = {
  title: "",
  description: "",
};

function BlogOverview({ blogList }) {
  // managing all our states in blogOverview
  const [openBlogDialogue, setOpenBlogDialogue] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //
  useEffect(() => {
    // Check if window object is available to ensure it's client-side
    if (typeof window !== "undefined") {
      router.refresh();
    }
  }, []);

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
        router.refresh();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  async function handleDeleteBlog(currentId) {
    try {
      const request = await fetch(`/api/delete-blog?id=${currentId}`, {
        method: "DELETE",
      });

      const response = await request.json();

      if (response?.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 g-6 mt-5 gap-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem) => (
            <Card className="p-5" key={blogItem._id}>
              <CardContent>
                <CardTitle className="mb-5">{blogItem.title}</CardTitle>
                <CardDescription>{blogItem.description}</CardDescription>
                <div className="mt-5 flex gap-5 items-center">
                  <Button>Edit</Button>
                  <Button onClick={() => handleDeleteBlog(blogItem._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="text-3xl font-extrabold">No blogs to display</Label>
        )}
      </div>
    </div>
  );
}
export default BlogOverview;
