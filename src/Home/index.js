import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {
  return (

    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">


       
        
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page">Shorten URL</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ShortenedURLList">All Shortened URLs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className='shortner'>  <h1>URL Shortner</h1> 
    </div>
</>


  );
}

export default Home;