"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  console.log(router);

  const handleNavigate = () => {
    router.push("products");
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Working</h1>
      <Link href={"products"}>Navigate to Products Page</Link>
      <Link href={"account"}>Navigate to Accounts page</Link>

      <h2 className="font-bold mt-3 text-lime-400 text-3xl">
        Alternative way of navigating using useRouter
      </h2>

      <button onClick={handleNavigate}>Go to Products Page</button>
    </main>
  );
}
