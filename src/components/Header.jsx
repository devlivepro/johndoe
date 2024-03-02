import React from "react";

function Header() {
  return (
    // Bloc header
    <header className="position-relative">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ opacity: 0.3 }}
      ></div>

      <div className="container h-100 d-flex flex-column justify-content-center align-items-center position-relative z-index-1">
        <p class="text-center color-official4 size1">John Doe</p>
        <p className="text-center color-official4 size2">
          Junior Web Developer
        </p>
        <a href="#about" className="btn btn-primary btn-jd mt-3">
          Read more
        </a>
      </div>
    </header>
    // End bloc header
  );
}

export default Header;
