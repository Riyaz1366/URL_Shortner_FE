import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

import "./ShortenedURLList.css";

 function ShortenedURLList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/all-shortened-urls")
      .then((response) => {
        console.log(response.data);
        setUrls(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleURLClick = (shortKey) => {
    // Increment the click count on the frontend
    setUrls((prevUrls) =>
      prevUrls.map((url) =>
        url.short_key === shortKey
          ? { ...url, Clicks: url.Clicks + 1 } // Update the click count
          : url
      )
    );
  };
  

  return (

    <>
    <div>
    <h2>List of Shortened URLs</h2>
    <NavLink></NavLink>
    </div>
    <div className="list-container">
      
      <ul className="url-list">
        {urls.map((url) => (
          <li key={url.short_key} className="url-item">
            <a
              href={`http://localhost:3002/shorten/${url.short_key}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => handleURLClick(url.short_key)} 
            >
              {url.short_key}
            </a>
            <span className="click-count">Clicks: {url.Clicks}</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
        }


        export default ShortenedURLList; 