import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import johnDoeImg from "../assets/img/john-doe-about.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />

      <main className="container">
        <section id="about" className="py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {/* Contenu de gauche */}
                    <div className="col-md-6">
                      <h1 className="card-title border-title bold">About</h1>
                      <blockquote className="semi-bold">
                        Passionate about computers and new technologies, I
                        trained as a <strong>web integrator-developer</strong>
                        at CEF. During this training, I was able to acquire a
                        solid foundation for working in the field of{" "}
                        <strong>web development</strong>.
                      </blockquote>

                      <blockquote>
                        Based in Lyon, I'm looking for a work-study position in
                        a digital agency to consolidate my training as a{" "}
                        <strong>full-stack web developer</strong>.
                      </blockquote>

                      <blockquote>
                        I pay particular attention to the quality of the code I
                        write and respect web best practices.
                      </blockquote>
                    </div>

                    {/* Contenu de droite */}
                    <div className="col-md-6">
                      <img
                        src={johnDoeImg}
                        alt="John Doe"
                        className="img-fluid rounded"
                      />
                      <p>{/* Texte sous l'image */}</p>
                      <h2>My skills</h2>
                      <span id="progressbar-label">HTML5 90%</span>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progressbar-backgound1"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-labelledby="progressbar-label"
                        ></div>
                      </div>

                      <span id="progressbar-label">CSS 80%</span>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progressbar-backgound2"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-labelledby="progressbar-label"
                        ></div>
                      </div>

                      <span id="progressbar-label">JAVASCRIPT 70%</span>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progressbar-backgound3"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-labelledby="progressbar-label"
                        ></div>
                      </div>

                      <span id="progressbar-label">PHP 60%</span>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progressbar-backgound4"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-labelledby="progressbar-label"
                        ></div>
                      </div>

                      <span id="progressbar-label">REACT 50%</span>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progressbar-backgound5"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-labelledby="progressbar-label"
                        ></div>
                      </div>
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
