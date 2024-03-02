import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

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
      <main className="container mt-4">
        <div className="col-md-12 mb-4">
          <h1 className="text-center color-official4 border-section-title banner-section-contact">
            Contact
          </h1>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone number:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
          {/* End contact */}

          {/* Bloc map */}
          <div className="col-md-6">
          <h1>John Doe</h1>
            <p>228 Park Ave S, New York</p>
            <p>NY 10003, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.104108029262!2d-73.99328961090748!3d40.73773466228136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a18eea9bc7%3A0x854ed8e97acd1dde!2sJohn%20Doe!5e0!3m2!1sfr!2sfr!4v1709121020884!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </p>
          </div>
          {/* End map */}
          
        </div>
      </main>
      {/* End */}

      <Footer />
      <Scroll />
    </div>
  );
};

export default Contact;
