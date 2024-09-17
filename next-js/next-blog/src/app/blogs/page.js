import BlogOverview from "../components/blog-overview";

async function fetchListOfBlogs() {
  try {
    const request = await fetch("http://localhost:3000/api/get-blogs");

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
  console.log(blogList);

  return <BlogOverview />;
}

export default Blogs;
