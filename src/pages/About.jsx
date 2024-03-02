import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

// Const github information retrieval
const About = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/github-john-doe"
      ); // User GitHub url.
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  // End const github information retrieval

  return (
    <div>
      <Nav />

      {/* Bloc */}
      <main className="container mt-4">
        <div className="col-md-12 mb-4">
          <h1 className="text-center color-official4 border-section-title banner-section-bg">
            About
          </h1>

          <div className="card text-center">
            <p>
              <br />
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <img src={userData.avatar_url} alt="Avatar" width="150" />
                  <br />
                  <br />
                  <h2>{userData.name}</h2>
                  <p>{userData.bio}</p>
                  <p>Followers: {userData.followers}</p>
                  <p>Following: {userData.following}</p>
                  <p>Public Repos: {userData.public_repos}</p>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Profile
                  </a>
                </div>
              )}
            </p>
          </div>
        </div>
      </main>
      {/* End bloc */}

      <Footer />
      <Scroll />
    </div>
  );
};

export default About;
