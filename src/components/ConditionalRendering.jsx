import { useState } from "react";
import { fastFoodProducts } from "../db";

const ConditionalRendering = () => {
  const [myFood, setMyFood] = useState(fastFoodProducts);
  const [toggle, setToggle] = useState(false);

  const foodRender = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <p>Items price greater then 200 will be marked as ❤️</p>
      <button onClick={foodRender}>
        Click Here to Render Fast Food Products List
      </button>
      <div className="listItems">

      {toggle &&
        myFood.map((item) => (
            <div key={item.id} className="listItem">
            <p>{item.title}</p>
            <p>{item.price > 200 ? item.price + "❤️" : item.price}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default ConditionalRendering;
