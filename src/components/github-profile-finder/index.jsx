import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("lahirudilz");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setUsername("");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading! Please wait...</h2>
      </div>
    );
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
