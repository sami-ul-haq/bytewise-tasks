import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionalRendering from "./components/ConditionalRendering";
import RenderingLists from "./components/RenderingLists";
import NotFound from "./components/NotFound";
import Task4 from "./Task4";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responding-to-events" element={<Task4 />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/rendering-list" element={<RenderingLists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;