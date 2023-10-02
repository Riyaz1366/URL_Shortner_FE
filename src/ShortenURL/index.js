import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShortenURL = () => {
    const { shortKey } = useParams();
  
    useEffect(() => {
      
      axios.get(`http://localhost:3002/shorten/${shortKey}`)
        .then((response) => {
          if (response.status === 200) {
            window.location.href = response.data.original_url; 
          }
        })
        .catch((error) => {
          console.error('Error fetching original URL:', error);
        });
    }, [shortKey]);

    return (
    <div>
      Redirecting...
    </div>)

}
  
    
    export default ShortenURL;