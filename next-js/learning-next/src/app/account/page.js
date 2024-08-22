import { redirect } from "next/navigation";

export default function Accounts() {
  const userProfileinfo = null;

  if (userProfileinfo === null) redirect("products?search=product1");

  return <h1>Accounts Page</h1>;
}
