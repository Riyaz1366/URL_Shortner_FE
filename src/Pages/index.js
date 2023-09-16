import './style.css'
import React, { useState } from "react";
import axios from "axios";

const Pages = () => {

  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");


  const shortenURL = async () => {
    try {
      const response = await axios.post("http://localhost:3002/shorten", { originalURL });
      setShortenedURL(response.data.shortenedURL);
    } catch (error) {
     console.log(error)
    }
  };
  
  return (
    <div className="container">
      <div className="header">
        <h1>URL Shortener</h1>
      </div>
      <form className="url-form">
        <div>
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
          />
          <button className="shorten-button" onClick={shortenURL}>
            Shorten
          </button>
        </div>
        {shortenedURL && (
          <p className="shortened-url">Shortened URL: {shortenedURL}</p>
        )}
      </form>


   </div>
  );
}

export default Pages;