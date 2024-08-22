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
