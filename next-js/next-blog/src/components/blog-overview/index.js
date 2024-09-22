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
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

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

      const blogDataToSend = {
        id: currentEditedBlogId, // Only pass the ID if editing
        title: blogFormData.title,
        description: blogFormData.description,
      };

      const request =
        currentEditedBlogId !== null
          ? await fetch("/api/update-blog", {
              method: "PUT",
              body: JSON.stringify(blogDataToSend), // Include ID, title, and description in the body
              headers: {
                "Content-Type": "application/json", // Ensure JSON content type
              },
            })
          : await fetch("/api/add-blog", {
              method: "POST",
              body: JSON.stringify(blogFormData), // Only send title and description when adding new
              headers: {
                "Content-Type": "application/json", // Ensure JSON content type
              },
            });

      const response = await request.json();

      if (response?.success) {
        setBlogFormData(initialBlogFormData); // Reset the form after save
        setOpenBlogDialogue(false); // Close the dialog after saving
        setLoading(false);
        setCurrentEditedBlogId(null); // Reset the edited blog ID
        router.refresh(); // Refresh the page to show updated blog
      }

      console.log(response);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData); // Reset the form in case of error
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

  function handleEdit(getCurrentBlog) {
    setCurrentEditedBlogId(getCurrentBlog?._id);
    setBlogFormData({
      title: getCurrentBlog?.title,
      description: getCurrentBlog?.description,
    });
    setOpenBlogDialogue(true);
  }

  console.log(currentEditedBlogId);

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
        currentEditedBlogId={currentEditedBlogId}
        setCurrentEditedBlogId={setCurrentEditedBlogId}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 g-6 mt-5 gap-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem) => (
            <Card className="p-5" key={blogItem._id}>
              <CardContent>
                <CardTitle className="mb-5">{blogItem.title}</CardTitle>
                <CardDescription>{blogItem.description}</CardDescription>
                <div className="mt-5 flex gap-5 items-center">
                  <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
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
