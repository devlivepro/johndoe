import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from '../components/Scroll';
import johnDoeImg from "../assets/img/john-doe-profil.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />

      <main className="container">
        <section id="about" className="py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={johnDoeImg}
                alt="John Doe"
                className="img-fluid rounded mb-3"
              />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">About</h1>
                  <p className="card-text">
                    <h6>My name is <strong>Joe Doe</strong> and I'm a technology enthusiast in the
                    making. Currently training to become a web developer, I'm
                    about to complete my academic course and enter the
                    professional world. My goal is to use my newly acquired
                    skills in web development to contribute to innovative and
                    challenging projects. I'm driven by curiosity and a constant
                    desire to learn, which is why I'm looking for exciting
                    challenges in my future job. My background has enabled me to
                    master essential web languages and technologies, including
                    HTML, CSS and JavaScript. What's more, I've developed solid
                    web design and development skills through practical projects
                    and academic experience. I'm keen to join a dynamic team
                    where I can contribute and learn in a collaborative
                    environment. My motivation, perseverance and desire to grow
                    professionally make me an ideal candidate for web
                    development opportunities. I'm looking forward to putting my
                    skills to work for a visionary company and contributing to
                    its success.</h6>
                  </p>
                  <h2>Skills</h2>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar color-official1"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-labelledby="progressbar-label"
                    >
                      <span id="progressbar-label">HTML/CSS (90%)</span>
                    </div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-labelledby="progressbar-label"
                    >
                      <span id="progressbar-label">JavaScript (80%)</span>
                    </div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-labelledby="progressbar-label"
                    >
                      <span id="progressbar-label">React (70%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Scroll />
    </div>
  );
};

export default Home;
