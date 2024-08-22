import { redirect } from "next/dist/server/api-utils";

export default function Accounts() {
  const userProfileInfo = null;

  if (userProfileInfo === null) redirect;

  return <h1>Accounts Page</h1>;
}
