import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from '../components/Scroll';
import cardImg from "../assets/img/project/espace-bien-etre.jpg";
import cardImg2 from "../assets/img/project/fresh-food.jpg";
import cardImg3 from "../assets/img/project/restaurant-japonais.jpg";

const Project = () => {
  return (
    <div>
      <Nav />

      <main className="container mt-4">
      <div className="col-md-12 mb-4">
          <h1 className="text-center color-official4 border-section-title banner-section-bg">Projects</h1>
        </div>
        <div className="row">
          {/* Projet 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Projet 1" />
              <div className="card-body">
                <h1 className="card-title color-official3">Wellness area</h1>
                <p className="card-text">
                  <h6>
                    <strong>Wellness area</strong> is a website project
                    dedicated to well-being and mental health. It aims to
                    provide an online platform where visitors can find
                    resources, advice and services to improve their physical,
                    mental and emotional well-being. The site will feature a
                    variety of content, including informative articles,
                    meditation videos, mental health tips, healthy recipes,
                    workouts, inspiring testimonials and service offerings from
                    wellness professionals.
                  </h6>
                </p>
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg2} className="card-img-top" alt="Projet 2" />
              <div className="card-body">
                <h1 className="card-title color-official3">Fresh food</h1>
                <p className="card-text">
                  <h6>
                    <strong>Fresh Food</strong> is a website project focused on
                    promoting a healthy lifestyle through balanced eating and
                    fresh recipes. The site aims to inspire visitors to adopt
                    healthy eating habits by providing information on the
                    benefits of fresh food, nutritious recipes, cooking tips and
                    resources for mindful eating. Fresh Food is for those
                    looking for simple, delicious ways to eat healthily and feel
                    good about themselves.
                  </h6>
                </p>
              </div>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg3} className="card-img-top" alt="Projet 3" />
              <div className="card-body">
                <h1 className="card-title color-official3">
                  Japanese restaurant
                </h1>
                <p className="card-text">
                  <h6>
                    <strong>Japanese Restaurant</strong> project is an online
                    platform dedicated to the promotion and discovery of
                    authentic Japanese cuisine. The site aims to offer visitors
                    an immersive experience by presenting Japanese cuisine in
                    all its facets, including iconic dishes, preparation
                    techniques, history and culinary culture. By featuring
                    traditional recipes, shopping guides for Japanese
                    ingredients and tasting tips, the site aims to educate and
                    inspire Japanese food lovers.
                  </h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Scroll />
    </div>
  );
};

export default Project;
