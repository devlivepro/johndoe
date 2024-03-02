import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from '../components/Scroll';
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <Nav />

      {/* Bloc */}
      <main className="container mt-4">
        <div className="col-md-12 mb-4">
          <h1 className="text-center color-official4 border-section-title banner-section-bg">Services</h1>
        </div>
        <div className="row">

          {/* Service 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div
                className="banner-section-serv card-img-top"
                alt="Projet 1"
              />
              <div className="card-body text-center">
                <h1 className="card-title color-official3">HTML</h1>
                <p className="card-text">
                  <h6>
                    I offer professional <strong>HTML</strong> coding services
                    to meet your web development needs. Here's what I can do for
                    you:
                    <br/>
                    <br/>
                    <ul>- Creation of static and dynamic websites.</ul>
                    <ul>- Integration of PSD templates in HTML/CSS.</ul>
                    <ul>- Optimization and enhancement of existing code.</ul>
                    <ul>- Creation of interactive forms.</ul>
                    <ul>- Integration of JavaScript functionalities.</ul>
                    <ul>
                      - Responsive rendering for optimal user experience on all
                      devices.
                    </ul>
                    <ul>- W3C-compliant code validation.</ul>
                  </h6>
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          {/* End service 1 */}

          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div
                className="banner-section-serv card-img-top"
                alt="Projet 2"
              />
              <div className="card-body text-center">
                <h1 className="card-title color-official3">CSS</h1>
                <p className="card-text">
                  <h6>
                    I offer professional <strong>CSS</strong> coding services to
                    meet your web development needs. Here's what I can do for
                    you:
                    <br/>
                    <br/>
                    <ul>- Creation of elegant, responsive layouts.</ul>
                    <ul>- Customize styles for websites and applications.</ul>
                    <ul>- Integration of CSS designs and layouts.</ul>
                    <ul>- Optimization of performance and loading speed.</ul>
                    <ul>- Advanced use of CSS3 for modern visual effects.</ul>
                    <ul>
                      - Development of CSS themes and templates for various
                      platforms.
                    </ul>
                    <ul>- Support and debugging for CSS-related problems.</ul>
                  </h6>
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          {/* End service 2 */}

          {/* Service 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div
                className="banner-section-serv card-img-top"
                alt="Projet 3"
              />
              <div className="card-body text-center">
                <h1 className="card-title color-official3">React</h1>
                <p className="card-text">
                  <h6>
                    I offer development services with <strong>React</strong> to
                    meet your needs for creating modern web applications. Here's
                    what I can do for you:
                    <br/>
                    <br/>
                    <ul>
                      - Development of interactive and responsive web
                      applications with React
                    </ul>
                    <ul>
                      - Creation of reusable components for modular
                      architecture.
                    </ul>
                    <ul>
                      - Integration of advanced features such as routing, forms
                      and global state with Redux or Context APIs.
                    </ul>
                    <ul>
                      - Integration of complementary libraries and frameworks
                      such as Material-UI or Bootstrap for an elegant user
                      interface.
                    </ul>
                    <ul>
                      - Application deployment and configuration on cloud
                      computing platforms such as Netlify or Vercel.
                    </ul>
                    <ul>
                      - Support and debugging to resolve development problems
                      with React.
                    </ul>
                  </h6>
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          {/* End service 3 */}

        </div>
        {/* End bloc */}
      </main>

      <Footer />
      <Scroll />
    </div>
  );
};

export default Service;
