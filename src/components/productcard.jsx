import React from "react";
import ViewButton from "../components/button";
// import "./Productcard.css"; // Ensure you have a CSS file for styling

const Productcard = () => {
  // Static product details
  const productImage = "https://tse1.mm.bing.net/th?id=OIP.P66iRyrKMk2OemWy00gajQHaG7&pid=Api&P=0&h=180";
  const productName = "Camera";
  const price = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{price}</p>
      <ViewButton />
    </div>
  );
};

export default Productcard;
