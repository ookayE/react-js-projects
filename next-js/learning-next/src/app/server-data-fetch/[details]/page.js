import { fetchUserDetails } from "@/utilities/fetchUserData";

export default async function userDetails({ params }) {
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
