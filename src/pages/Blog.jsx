import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Imgblog from "../assets/img/blog/coder.jpg";
import Imgblog2 from "../assets/img/blog/croissance.jpg";
import Imgblog3 from "../assets/img/blog/google.jpg";
import Imgblog4 from "../assets/img/blog/screens.jpg";
import Imgblog5 from "../assets/img/blog/seo.jpg";
import Imgblog6 from "../assets/img/blog/technos.png";
import { Link } from "react-router-dom";

// Const Blog articles data
const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Coding your website in HTML/CSS",
      image: Imgblog,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Sell your products on the web",
      image: Imgblog2,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Position yourself on Google",
      image: Imgblog3,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Coding in responsive design",
      image: Imgblog4,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      title: "Search engine optimization techniques",
      image: Imgblog5,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      title: "Learning to code",
      image: Imgblog6,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  // End

  return (
    <div>
      <Nav />
      <Banner />

      {/* Bloc */}
      <main className="container mt-4">
        <div className="col-md-12">
          <h1 className="text-center">Blog</h1>
          <h5 className="text-center">
            Here are a few articles on web development.
          </h5>
          <div className="border-title-service text-center"></div>
        </div>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-4 mb-4">
              <div className="card border-projects">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-text">{article.description}</p>

                  {/* Article 1 */}
                  {article.id === 1 ? (
                    <Link
                      to={`https://www.briantracy.com/blog/sales-success/increase-sales/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  ) : // End

                  // Article 2
                  article.id === 2 ? (
                    <Link
                      to={`https://mangools.com/blog/learn-seo/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  ) : // End

                  // Article 3
                  article.id === 3 ? (
                    <Link
                      to={`https://visme.co/blog/website-mockup/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  ) : // End

                  // Article 4
                  article.id === 4 ? (
                    <Link
                      to={`https://blog.hubspot.com/website/css-tutorial${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  ) : // End

                  // Article 5
                  article.id === 5 ? (
                    <Link
                      to={`https://cmoe.com/blog/23-of-the-best-learning-and-development-ld-blogs/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  ) : (
                    // End

                    // Article 6
                    <Link
                      to={`https://www.datacamp.com/blog/how-to-learn-ai${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Read more
                    </Link>
                  )}
                </div>
                {/* // End */}

                {/* Text Block */}
                {article.id === 1 ? (
                    <div className="text-achievement semi-bold">
                      Published August 22, 2022
                    </div>
                  ) : article.id === 2 ? (
                    <div className="text-achievement semi-bold">
                      Published August 20, 2022
                    </div>
                  ) : article.id === 3 ? (
                    <div className="text-achievement semi-bold">
                      Published August 1, 2022
                    </div>
                  ) : article.id === 4 ? (
                    <div className="text-achievement semi-bold">
                      Published July 31, 2022
                    </div>
                  ) : article.id === 5 ? (
                    <div className="text-achievement semi-bold">
                      Published July 30, 2022
                    </div>
                  ) : (
                    <div className="text-achievement semi-bold">
                      Published July 12, 2022
                    </div>
                  )}
                  {/* End Text Block */}

              </div>
            </div>
          ))}
        </div>
      </main>
      {/* End bloc */}

      <Footer />
      <Scroll />
    </div>
  );
};

export default Blog;
