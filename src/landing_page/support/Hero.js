import React from "react";

function Hero() {
  return (
    <div className="container-fluid create-ticket-hero">
      <div className="row">
        <div className="col-6  mb-5 mt-5">
          <h5>Support Portal</h5>
          <p className="mt-5">Search for an answer or browser help topics to create a ticket </p>
          <input className="create-ticket-hero-hero-input"
            type="text"
            placeholder=" Eg how do i activate F&O,why is my order getting rejected"
          />
          <br />

          <a href="">Track account opening</a><br/>
          <a href="">Track segment activation</a><br/>
          <a href="">Intraday</a><br/>
          <a href="">margins</a><br/>
          <a href="">Kite user manual</a><br/>
        </div>
        <div className="col-6 mb-5 mt-5">
          <h5>Track Tickets</h5>
          <h6 className="mt-5 mb-4">Featured</h6>
          <ol>
            <li>
              <a href="">current Takeovers and Delising-January 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverage-Miss& Co</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
