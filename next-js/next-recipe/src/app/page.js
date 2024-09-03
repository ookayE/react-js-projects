import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Recipe App</h1>
      <Link href={"/recipe-list"}>Export Recipes</Link>
    </div>
  );
}
