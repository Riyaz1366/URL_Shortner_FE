import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/page">
                  Shorten URL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ShortenedURLList">
                  All Shortened URLs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="shortner">
        {" "}
        <h1>URL Shortner</h1>
        <form></form>
      </div>
    </>
  );
}

export default Home;
