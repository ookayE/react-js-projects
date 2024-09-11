import { fetchUserDetails } from "@/utilities/fetchUserData";

export default async function userDetails({ params }) {
  async function fetchUserDetails(currentUserId) {
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

  console.log(params);

  const userDetails = await fetchUserDetails(params.details);

  return (
    <div>
      <h1>User Details page</h1>
      <p>
        {userDetails.firstName} {userDetails.lastName}
      </p>
      <p>{userDetails.age}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone}</p>
      <p>{userDetails.birthDate}</p>
    </div>
  );
}
