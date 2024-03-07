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
          <div className="card text-center">
            <h1 className="text-center bold">Github user</h1>
            <p>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <h2 className="semi-bold">{userData.name}</h2>
                  <img src={userData.avatar_url} alt="Avatar" width="150" />
                  <p className="color-official3">{userData.bio}</p>
                  <p className="color-official3">
                    Followers: {userData.followers}
                  </p>
                  <p className="color-official3">
                    Following: {userData.following}
                  </p>
                  <p className="color-official3">
                    Created on: {userData.created_at}
                  </p>
                  <p className="color-official3">
                    Modified on: {userData.updated_at}
                  </p>
                  <p className="color-official3">
                    URL repositories:{" "}
                    <a
                      className="color-official1"
                      href={userData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://api.github.com/users/github-john-doe/repos
                    </a>
                  </p>
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
