React Hooks ONLY work in client components

Folder names in Next are considered routes. Name folder desired route, then add a page.js

    -Nested routes work the same way and are created inside parent

Convert page to client component by adding 'use client' at top of file

Create dynamic pages using brackets [] in folder name

useRouter from next/navigation

const router = useRouter();

const handleNavigate = () => {
router.push("products");
};

redirect('\_\_') pass path into redirect

---

usePathname: lets you read the current URL's pathname
const pathName = usePathname()

    URL: localhost:3000/cart
    console.log(pathName)
    >>> /cart

useSearchParams: lets you read the current URL's search parameters
URL: http://localhost:3000/cart?search=product1&randomvalue=abcde
const searchParams = useSearchParams()

    console.log(searchParams.get('search'), searchParams.get('randomvalue'))
    >>> product1 abcde

Server-side components are automatically passed a {searchParams} prop that gives us access to the parsed parameters of the page or route

loading.js - create custom loading pages
not-found.js - create custom 404 not found pages

---

Data Fetching:

For most cases, where you don't need real-time data (e.g. polling), you can fetch data on the server with Server Components.

You can fetch data in a single server-round trip, reducing the number of network requests and client-server waterfalls.
Prevent sensitive information, such as access tokens and API keys, from being exposed to the client (which would require an intermediate API route).
Reduce latency by fetching data close to the source (if your application code and database are in the same region).
Data requests can be cached and revalidated.
