import { useEffect, useState } from "react";

function SortData() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState("");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setLoading(false);
        setUsers(data.users);
      }

      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  //handleSort function to handle selection on refresh

  useEffect(() => {
    let copyUsers = [...users];
    if (sort === "ascending") {
      copyUsers = copyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? 1 : -1
      );

      setUsers(copyUsers);
    } else if (sort === "descending") {
      copyUsers = copyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? -1 : 1
      );
      setUsers(copyUsers);
    }
  }, [sort]);

  console.log(sort);

  if (loading) return <h1>Loading Users...</h1>;

  return (
    <div className="sort-data-container">
      <h1>Sort Data</h1>
      <div className="sort-dropdown-container">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          name="sort"
          id=""
        >
          <option value="" id="">
            Please Select Option
          </option>
          <option value="ascending" id="ascending">
            Sort A-Z
          </option>
          <option value="descending" id="descending">
            Sort Z-A
          </option>
        </select>
      </div>
      <ul>
        {users && users.length > 0
          ? users.map((userItem) => (
              <li>
                <p key={userItem.id}>{userItem.firstName}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export default SortData;
