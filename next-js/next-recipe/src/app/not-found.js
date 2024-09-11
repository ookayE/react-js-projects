import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page was not found</h1>
      <Link href={"/"}>Back Home</Link>
    </div>
  );
}
