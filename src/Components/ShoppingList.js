import React from "react";
import ShoppingCard from "./ShoppingCard";

const ShoppingList = ({ products }) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
      {products.map((product) => (
        <ShoppingCard key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ShoppingList;
