import BlogOverview from "../components/blog-overview";

async function fetchListOfBlogs() {
  try {
    const request = await fetch("http://localhost:3000/api/get-blogs", {
      method: "GET",
      cache: "no-store",
    });

    if (!request.ok) {
      throw new Error(`${request.status}`);
    }

    const response = await request.json();

    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

async function Blogs() {
  const blogList = await fetchListOfBlogs();

  return <BlogOverview blogList={blogList} />;
}

export default Blogs;
