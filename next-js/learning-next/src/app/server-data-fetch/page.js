import Link from "next/link";
import { fetchListOfUsers } from "@/utilities/fetchUserData";

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();

  console.log(listOfUsers);
  return (
    <div className="p-10">
      <h1>Server side data fetching: User List page</h1>
      <ul>
        {listOfUsers && listOfUsers.length
          ? listOfUsers.map((userItem) => (
              <li className="mt-5 cursor-pointer">
                <Link href={`/server-data-fetch/${userItem.id}`}>
                  {userItem.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
