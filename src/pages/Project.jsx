import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { Link } from "react-router-dom";
import cardImg from "../assets/img/project/fresh-food.jpg";
import cardImg2 from "../assets/img/project/restaurant-japonais.jpg";
import cardImg3 from "../assets/img/project/espace-bien-etre.jpg";

const Project = () => {
  return (
    <div>
      <Nav />
      <Banner />

      <main className="container mt-4">
        <div className="col-md-12">
          <h1 className="text-center">Projects</h1>
          <h5 className="text-center">Here are a few of my creations.</h5>
          <div className="border-title-service text-center"></div>
        </div>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card border-projects">
              <img src={cardImg} className="card-img-top" alt="Projet 1" />
              <div className="card-body">
                <h2 className="card-title color-official3 text-center font bold">
                  Fresh food
                </h2>
                <p className="card-text font text-center text-indent semi-bold">
                  Creation of a website with online ordering.
                  <br />
                  <br />
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <button className="button-look bold">See</button>
                  </Link>
                </p>
              </div>
              <div className="text-achievement text-center semi-bold">Site built with PHP and MySQL</div>
            </div>
          </div>
          {/* End project 1 */}

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card border-projects">
              <img src={cardImg2} className="card-img-top" alt="Projet 2" />
              <div className="card-body">
                <h2 className="card-title color-official3 text-center font bold">
                  Akira Restaurant
                </h2>
                <p className="card-text font text-center text-indent semi-bold">
                  Creation of a showcase website
                  <br />
                  <br />
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <button className="button-look bold">See</button>
                  </Link>
                </p>
              </div>
              <div className="text-achievement text-center semi-bold">Website built with WordPress</div>
            </div>
          </div>
          {/* End bloc 2 */}

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card border-projects">
              <img src={cardImg3} className="card-img-top" alt="Projet 3" />
              <div className="card-body">
                <h2 className="card-title color-official3 text-center font bold">
                  Fresh food
                </h2>
                <p className="card-text font text-center text-indent semi-bold">
                  Creation of a website with online ordering.
                  <br />
                  <br />
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <button className="button-look bold">See</button>
                  </Link>
                </p>
              </div>
              <div className="text-achievement text-center semi-bold">Website designed in HTML/CSS</div>
            </div>
          </div>
          {/* End project 3 */}
        </div>
        {/* End bloc */}
      </main>

      <Footer />
      <Scroll />
    </div>
  );
};

export default Project;
