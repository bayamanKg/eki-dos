import React from "react";
import "./FoodItem.css";

export const FoodItem = ({ food }) => {
   return (
      <div className="food-cart">
         <div className="food-img">
            <img src={food.img} alt="shawarma" />
         </div>
         <div className="food-info">
            <h3>{food.name}</h3>
            <p>{food.price}</p>
         </div>
      </div>
   );
};
