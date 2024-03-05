import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("ookayE");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {}

  async function fetchGithubUserData() {
    setLoading(true);
    const resolve = await fetch(`http://api.github.com/users/${username}`);

    const data = await resolve.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

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

        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}
