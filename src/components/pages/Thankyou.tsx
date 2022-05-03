import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/HomePage", { replace: true });
    }, 10000);

    return () => {
      clearTimeout(timer); // <-- clear timeout effect on unmount
    };
  }, [])

  return (
    <div className="movie-container">
      <h2>Thank you for ordering...</h2>
      <br/>
      <h2>Page will redirect in 10 seconds...</h2>
    </div>
  );
};

export default Thankyou;