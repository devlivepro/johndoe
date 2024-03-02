import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from '../components/Scroll';

const Legal = () => {
  return (
    <div>
      <Nav />
      <main className="container mt-4">
        <div className="col-md-12 mb-4">
          <h1 className="text-center color-official4 border-section-title banner-section-bg">
            Legal notice
          </h1>
        </div>

        <div className="accordion mb-4" id="accordion">
          {/* Accordéon - L’éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                The site editor
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Welcome to the portfolio of John Doe, passionate and creative
                  web developer. This site is a showcase of my skills, projects
                  and background in web development. My aim is to present myself
                  to the job market as a competent and motivated web developer.
                  Through this portfolio, I'd like to share with you my
                  experience, my achievements and my passion for programming. As
                  a dedicated student, I have acquired a solid knowledge base in
                  web development through my training at{" "}
                  <strong>
                    <a
                      href="https://www.centre-europeen-formation.fr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CEF
                    </a>
                  </strong>
                  . I worked on a variety of projects, acquiring skills in HTML,
                  CSS, JavaScript, as well as in the use of frameworks such as
                  React and Angular. I believe in continuous learning and am
                  always open to new technologies and exciting challenges. My
                  aim is to contribute significantly to innovative projects and
                  create web solutions that bring value to my customers and
                  users. Please feel free to explore my portfolio to discover my
                  projects, skills and career path. If you'd like to know more
                  about me or discuss collaboration opportunities, I'd be
                  delighted to talk to you. Thank you for visiting my portfolio,
                  and I look forward to working together in the near future.
                </p>
              </div>
            </div>
          </div>

          {/* Accordéon - L’hébergeur du site */}
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
                <p>
                  <h1>Alway Data</h1>
                  <h6>91 Rue du Faubourg Saint-Honoré</h6>
                  <h6>75008 Paris</h6>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h6 className="color-official1">www.alwaysdata.com</h6>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Accordéon - Les crédits */}
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
                <p>
                  <a
                    href="https://pixabay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
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

export default Legal;
