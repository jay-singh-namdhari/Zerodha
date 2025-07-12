import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 border-bottom ">
        <h1 className="mb-4 ">Technology</h1>
        <h3 className="mb-4 text-muted">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mb-5 mt-3">
          {" "}
          Check out our
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
