export async function fetchListOfUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data.users;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchListOfUsersClient(setLoading, setUsers) {
  try {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    if (data?.users) {
      setUsers(data.users);
    }
  } catch (error) {
    console.log(error);
    setUsers([]);
  } finally {
    setLoading(false);
  }
}

export async function fetchUserDetails(currentUserId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
