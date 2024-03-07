import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

// Const contact
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  // End

  return (
    <div>
      <Nav />

      {/* Bloc contact*/}
      <div className="background-contact">
        <br />
        <main className="container mt-12 backgroundcolor-contact">
          <div className="col-md-12 mb-4">
            <h1 className="text-center">Contact</h1>
            <h5 className="text-center">
              Here are a few articles on web development.
            </h5>
            <div className="border-title-service text-center"></div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <h3 class="card-title mb-4 pb-2 border-title bold">
                Contact form
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control semi-bold"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control semi-bold"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control semi-bold"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control semi-bold"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-2">
                  <textarea
                    className="form-control semi-bold"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  class="text-center"
                  type="submit"
                  className="btn btn-primary mx-auto d-block mb-2"
                >
                  Send
                </button>
              </form>
            </div>
            {/* End contact */}

            {/* Bloc map */}
            <div className="col-md-6">
              <h3 class="card-title mb-4 pb-2 border-title bold">
                My contact details
              </h3>

              <address>
                <p className="semi-bold">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#444", fontSize: "1em" }}
                  />{" "}
                  40 Rue Laure Diebold, 69009 Lyon, France
                  <br />
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    style={{ color: "#444", fontSize: "1em" }}
                  />{" "}
                  06 20 30 40 50
                </p>
              </address>

              <div
                className="col-md-12"
                style={{ height: "100%", overflow: "hidden", maxWidth: "100%", height:"auto"}}
              >
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540965!2d4.796403976584354!3d45.77866571240166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1709750285848!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  style={{ border: "0" }}
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            {/* End map */}
          </div>
        </main>
        {/* End */}

        <Footer />
        <Scroll />
      </div>
    </div>
  );
};

export default Contact;
