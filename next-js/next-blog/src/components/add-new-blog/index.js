"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddNewBlog({
  openBlogDialogue,
  setOpenBlogDialogue,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDialogue(true)}>New Post</Button>
      </div>
      <div>Blog list</div>
      <Dialog open={openBlogDialogue} onOpenChange={setOpenBlogDialogue}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="text-white">
            <DialogTitle>Add New Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4 text-white">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
                id="title"
                className="col-span-3 text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                placeholder="Please add post"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
                id="description"
                className="col-span-3 text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-green-400 font-bold"
              onClick={handleSaveBlogData}
              type="button"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default AddNewBlog;
