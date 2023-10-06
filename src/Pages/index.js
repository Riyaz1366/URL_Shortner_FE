import "./style.css";
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";

const Pages = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  // const [fetchedShortenedURL, setFetchedShortenedURL] = useState("");
  // const navigate = useNavigate();
  // const history = useHistory();


  
  // const fetchShortenedURL = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3002/shorten/${originalURL}`);
  //     if (response.status === 200) {
  //       setFetchedShortenedURL(response.data.short_url);
  //     } else {
  //       console.error("Received an unexpected response:", response);
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.error("Request failed with response:", error.response.data);
  //     } else if (error.request) {
  //       console.error("Request made but no response was received:", error.request);
  //     } else {
  //       console.error("An error occurred:", error.message);
  //     }
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/shorten", {
        long_url: originalURL,
      });

      if (response.status === 200) {
        setShortenedURL(response.data.short_url);
        // navigate('/ShortenURL');
        // history.push(`/shorten/${shortenedURL}`);
      } else {
        console.error("Received an unexpected response:", response);
      }
    } catch (error) {
      if (error.response) {
        console.error("Request failed with response:", error.response.data);
      } else if (error.request) {
        console.error(
          "Request made, but no response was received:",
          error.request
        );
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };


  return (
    <div className="container">
      <div className="header">
        <h1>URL Shortener</h1>
      </div>
      <form className="url-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
          />

          <button type="submit" className="shorten-button">
            Shorten
          </button>
        </div>
      </form>
      <div>
  {shortenedURL && (
    <div>
      <p>Shortened URL created:</p>
      <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
        {shortenedURL}
      </a>
    </div>
  )}
  {/* {fetchedShortenedURL && (
    <div>
      <p>Fetched Shortened URL from DB:</p>
      <a href={fetchedShortenedURL} target="_blank" rel="noopener noreferrer">
        {fetchedShortenedURL}
      </a>
    </div>
  )} */}
</div>
    </div>
  );
};

export default Pages;
