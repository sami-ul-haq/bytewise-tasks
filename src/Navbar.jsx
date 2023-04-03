import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/responding-to-events">Responding to Events</Link>
        </li>
        <li>
          <Link to="/conditional-rendering">Conditional Rendering</Link>
        </li>
        <li>
          <Link to="/rendering-list">Rendering Lists</Link>
        </li>
        <li>
          <Link to="/react-routing">React Routing</Link>
        </li>
        <li>
          <Link to="/usestate-useeffect">UseState - UseEffect</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
