import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("ookayE");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const resolve = await fetch(`http://api.github.com/users/${username}`);

    const data = await resolve.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>

      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
