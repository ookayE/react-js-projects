"use client";

import { fetchListOfUsersClient } from "@/utilities/fetchUserData";
import { useEffect, useState } from "react";

export default function ClientSideDataFetching() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchListOfUsersClient(setLoading, setUsers);
  }, []);

  if (loading)
    return (
      <h3 className="font-extrabold text-3xl">Loading users. Please wait.</h3>
    );

  return (
    <div>
      <h1 className="text-5xl font-bold text-orange-600 p-4">
        Client side data fetching
      </h1>

      <ul className="pt-4">
        {users && users.length > 0
          ? users.map((userItem) => (
              <li key={userItem.id} className="text-cyan-400 pt-2 px-6">
                {userItem.firstName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
