"use client";
import { useState, useEffect } from "react";

import { FaBookmark } from "react-icons/fa";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userID = session?.user?.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    console.log(property._id);
    //can't bookmark if not a logged in user
    if (!userID) {
      toast.error("You need to be logged in to bookmark a property");
      return;
    }

    // if logged in
    bookmarkProperty({ propertyID: property._id }).then((response) => {
      if (response.error) return toast.error(response.error);
      setIsBookmarked(response.isBookmarked);
      toast.success(response.message);
    });
  };

  useEffect(() => {
    if (!userID) {
      setLoading(false);
      return;
    }

    checkBookmarkStatus(property._id).then((response) => {
      if (response.error) toast.error(error);
      if (response.isBookmarked) setIsBookmarked(response.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userID, checkBookmarkStatus]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return isBookmarked ? (
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      onClick={handleClick}
    >
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      onClick={handleClick}
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
