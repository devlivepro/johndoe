import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Legal = () => {
  return (
    <div>
      <Nav />

      {/* Bloc */}
      <main className="container mt-4">
        <div className="col-md-12 mb-4">
          <h1 className="text-center">Terms of use</h1>
          <div className="border-title-service text-center"></div>
        </div>

        <div className="accordion mb-4" id="accordion">
          {/* Accordeon - The website editor */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                The website editor
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <address>
                  <h2 className="bold">John Doe</h2>
                  <p className="semi-bold">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#444", fontSize: "1em" }}
                    />{" "}
                    40 Rue Laure Diebold
                  </p>
                  <p className="semi-bold">69009 Lyon, France</p>
                  <p className="semi-bold">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      style={{ color: "#444", fontSize: "1em" }}
                    />{" "}
                    <span className="color-official1 semi-bold">
                      06 20 30 40 50
                    </span>
                  </p>
                  <a href="mailto:john.doe@gmail.com">
                    <p className="color-official1">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#444", fontSize: "1em" }}
                      />{" "}
                      <span className="color-official1 semi-bold">
                        john.doe@gmail.com
                      </span>
                    </p>
                  </a>
                </address>
              </div>
            </div>
          </div>
          {/* End accordeon - The website editor */}

          {/* Accordeon - The website host */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Website host
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <h2 className="bold">Always Data</h2>
                <address>
                  <p className="semi-gold">91 Rue du Faubourg Saint-Honoré</p>
                  <p className="semi-gold">75008 Paris</p>

                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <br />
                    <p className="semi-gold">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ color: "#444", fontSize: "1em" }}
                      />{" "}
                      <span className="color-official1 semi-bold">
                        www.alwaysdata.com
                      </span>
                    </p>
                  </a>
                </address>
              </div>
            </div>
          </div>
          {/* End accordeon - website host */}

          {/* Accordeon - credits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Credits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <h2 className="bold">Credits</h2>
                <p className="semi-bold">Site développé par John Doe, étudiant du CEF.</p>
                <br />
                <p className="semi-bold">
                  Les images libres de droit sont issues du site{" "}
                  <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer"><span className="color-official1"><strong>Pixabay</strong></span></a>.
                </p>
              </div>
            </div>
          </div>
          {/* End accordeon - credits */}
        </div>
        {/* End bloc */}
      </main>

      <Footer />
      <Scroll />
    </div>
  );
};

export default Legal;
