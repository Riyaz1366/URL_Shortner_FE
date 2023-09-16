import React, { useState } from "react";
import axios from "axios";


function ShortenURLForm() {
    const [originalURL, setOriginalURL] = useState("");
    const [shortenedURL, setShortenedURL] = useState("");

    const shortenURL = async () => {
        try {
          const response = await axios.post("/api/shorten", { originalURL });
          setShortenedURL(response.data.shortenedURL);
        } catch (error) {
          // Handle errors
        }
      };
    
      return (
        <div>
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
          />
          <button onClick={shortenURL}>Shorten</button>
          {shortenedURL && <p>Shortened URL: {shortenedURL}</p>}
        </div>
      );
    }
    
    export default ShortenURLForm;