import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Imgblog from "../assets/img/blog/croissance.jpg";
import Imgblog2 from "../assets/img/blog/seo.jpg";
import Imgblog3 from "../assets/img/blog/google.jpg";
import Imgblog4 from "../assets/img/blog/screens.jpg";
import Imgblog5 from "../assets/img/blog//technos.png";
import Imgblog6 from "../assets/img/blog/AI.jpg";
import { Link } from "react-router-dom";

// Const Blog articles data
const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Increase product sales",
      image: Imgblog,
      description:
        "Increase your product sales using advanced IT strategies and tools. Optimize your online presence, leverage customer data for effective segmentation, and implement digital marketing techniques to attract and convert potential customers. Enhance your sales process with customized software solutions and in-depth analysis for continuous business growth.",
    },
    {
      id: 2,
      title: "Learn SEO",
      image: Imgblog2,
      description:
        "Discover the basics of SEO (Search Engine Optimization) to improve your website's visibility in search engine results. Learn best practices for optimizing your site's content, structure and performance to make it more attractive to search engines like Google. Acquire the skills you need to increase organic traffic, improve your site's ranking and achieve your online marketing objectives.",
    },
    {
      id: 3,
      title: "Build a mock-up",
      image: Imgblog3,
      description:
        "Create interactive digital mock-ups of your web or application projects with prototyping tools. Design intuitive, attractive user interfaces using graphic design and wireframing tools. Produce functional mock-ups to validate design ideas, gather user feedback and facilitate communication with developers. Speed up the development process by building realistic visual prototypes before moving on to the coding phase.",
    },
    {
      id: 4,
      title: "Learn CSS",
      image: Imgblog4,
      description:
        "Master the basics of CSS (Cascading Style Sheets) to add style and formatting to your web pages. Learn how to control the presentation of HTML elements, customize colors, fonts, margins and spacing, and create responsive layouts for optimal user experience on all devices. Use CSS to unleash your creativity and bring your web designs to life.",
    },
    {
      id: 5,
      title: "Learn Technologies",
      image: Imgblog5,
      description:
        "Explore the basics of AI (Artificial Intelligence) to understand how machines can learn and reason autonomously. Dive into the fundamental concepts of machine learning, deep learning and machine learning, and discover how these technologies can be applied in diverse fields such as image recognition, natural language processing, trend prediction and much more. Acquire the skills you need to design and implement intelligent solutions that improve efficiency and innovation in your business.",
    },
    {
      id: 6,
      title: "Learn AI",
      image: Imgblog6,
      description:
        "Discover the basics of AI (Artificial Intelligence) to understand how machines can simulate human intelligence. Explore the concepts of machine learning, deep learning and machine learning to create systems that can make decisions, recognize patterns and solve problems autonomously. Learn how AI is used in diverse fields such as image recognition, machine translation, virtual assistants and much more, and develop the skills needed to design innovative solutions.",
    },
  ];
  // End

  return (
    <div>
      <Nav />

      {/* Bloc */}
      <main className="container mt-4">
        <h1 className="text-center color-official4 border-section-title banner-section-bg">
          Latest articles
        </h1>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>

                  {/* Article 1 */}
                  {article.id === 1 ? (
                    <Link
                      to={`https://www.briantracy.com/blog/sales-success/increase-sales/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                  // End

                  // Article 2
                  ) : article.id === 2 ? (
                    <Link
                      to={`https://mangools.com/blog/learn-seo/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                  // End

                  // Article 3
                  ) : article.id === 3 ? (
                    <Link
                      to={`https://visme.co/blog/website-mockup/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                    // End

                    // Article 4
                  ) : article.id === 4 ? (
                    <Link
                      to={`https://blog.hubspot.com/website/css-tutorial${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                    // End

                    // Article 5
                  ) : article.id === 5 ? (
                    <Link
                      to={`https://cmoe.com/blog/23-of-the-best-learning-and-development-ld-blogs/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                    // End

                    // Article 6
                  ) : (
                    <Link
                      to={`https://www.datacamp.com/blog/how-to-learn-ai${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </Link>
                  )}
                  {/* // End */}
                </div>
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
