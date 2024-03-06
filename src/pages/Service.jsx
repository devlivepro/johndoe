import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <Nav />
      <Banner />

      {/* Bloc */}
      <main className="container mt-4">
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-12">
            <h1 className="text-center">My service offer</h1>
            <h5 className="text-center">Here are the services I can provide.</h5>
            <div className="border-title-service text-center"></div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-img-top" alt="Projet 1" />
              <div className="card-body margin-bottom-sectionservice mt-5 text-center">
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faDisplay}
                    style={{ color: "#0d6efd", fontSize: "2em" }}
                  />
                </div>
                <h4 className="card-title color-official3 font bold">
                  UX DESIGN
                </h4>
                <p className="card-text font text-indent semi-bold">
                  <strong>UX Design</strong> is a user-centered design method.
                  Its aim is to offer the user an optimal browsing experience.
                </p>
              </div>
            </div>
          </div>
          {/* End service 1 */}

          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-img-top" alt="Projet 2" />
              <div className="card-body margin-bottom-sectionservice mt-5 text-center">
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faFileCode}
                    style={{ color: "#0d6efd", fontSize: "2em" }}
                  />
                </div>
                <h4 className="card-title color-official3 bold">
                  WEB DEVELOPMENT
                </h4>
                <p className="card-text text-indent semi-bold">
                  <strong>Website development</strong> is based on the use of
                  HTML, CSS, JavaScript and PHP.
                </p>
              </div>
            </div>
          </div>
          {/* End service 2 */}

          {/* Service 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-img-top" alt="Projet 3" />
              <div className="card-body margin-bottom-sectionservice mt-5 text-center">
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassDollar}
                    style={{ color: "#0d6efd", fontSize: "2em" }}
                  />
                </div>
                <h4 className="card-title color-official3 bold">REFERENCING</h4>
                <p className="card-text text-indent semi-bold">
                  <strong>Search engine optimization</strong>, also known as
                  SEO, is the application of techniques to{" "}
                  <i>improve a website's position</i> in search engine results.
                </p>
              </div>
            </div>
          </div>
          {/* End service 3 */}
        </div>
        {/* End row */}
      </main>

      <Footer />
      <Scroll />
    </div>
  );
};

export default Service;
