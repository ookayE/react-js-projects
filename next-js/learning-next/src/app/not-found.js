import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This joint doesn't exist</h1>
      <Link href={"/"}>Go back home</Link>
    </div>
  );
}
