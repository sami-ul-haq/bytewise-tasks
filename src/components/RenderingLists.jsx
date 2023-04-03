import { useState } from "react";
import { Link } from "react-router-dom";
import { bakeryItemProducts, fastFoodProducts } from "../db";

const RenderingLists = () => {
  const [fastFood, setFastFood] = useState(fastFoodProducts);
  const [bakeryItems, setBakeryItems] = useState(bakeryItemProducts);
  return (
    <div>
      <h1>Rendering Lists</h1>
      <h2>Fast Foods</h2>
      <div className="listItems">
        {fastFood.map((item) => (
          <div key={item.id} className="listItem">
            <p>{item.title}</p>
            <p>{item.price > 200 ? item.price + "❤️" : item.price}</p>
            <Link to={`/food/${item.title}`} >View More</Link>
          </div>
        ))}
      </div>
      <h2>Fast Foods</h2>
      <div className="listItems">
        {bakeryItems.map((item) => (
          <div key={item.id} className="listItem">
            <p>{item.title}</p>
            <p>{item.price > 200 ? item.price + "❤️" : item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderingLists;
