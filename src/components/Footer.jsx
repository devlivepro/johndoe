import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareTwitter, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (

    // Bloc footer
    <footer className="bg-footer h6">
      <div className="footer-links">
        <div className="row py-5">

          
          {/* First coluwn */}
          <div className="col-md-3">
            <p>
              <h6 className="bold">John Doe</h6>
              <address className="mt-2">
                <p className="semi-bold">40 Rue Laure Diebold</p>
                <p className="semi-bold ">69009 Lyon, France</p>
                <p className="semi-bold ">Phone: 06 20 30 40 45</p>
              </address>
            </p>
            <div>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noreferrer"
                aria-label="Github John Doe"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter John Doe"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faSquareTwitter} size="xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/johndoe/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin John Doe"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </div>


          {/* Second coluwn */}
          <div className="col-md-3">
            <h6 className="bold">Useful links</h6>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/"> Home</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/about"> About</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/service"> Services</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/contact"> Contact</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/legal"> Legal Notice</a>
              </li>
            </ul>
          </div>


          {/* Third coluwn */}
          <div className="col-md-3">
            <h6 className="bold">Latest projects</h6>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/project"> Fresh food</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/project"> Akira Restaurant</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/project"> Wellness area</a>
              </li>
            </ul>
          </div>


          {/* Fourth colonne */}
          <div className="col-md-3">
            <h6 className="bold">Latest articles</h6>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/blog"> Coding your site in HTML/CSS</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/blog"> Sell your products on the web</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />
                <a href="/blog"> Position your site on Google</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#000000" }}>
        <div className="col-md-12 text-center">
          <p className="footer color-official4">© Designed by John Doe</p>
        </div>
      </div>
    </footer>
    
    // End bloc footer
  );
}

export default Footer;
