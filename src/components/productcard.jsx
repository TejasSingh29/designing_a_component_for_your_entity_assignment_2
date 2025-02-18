import React from "react";
import ViewButton from "../components/Button";
// import "./Productcard.css"; // Ensure you have a CSS file for styling

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
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
