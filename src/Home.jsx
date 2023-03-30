import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/responding-to-events">Task 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
