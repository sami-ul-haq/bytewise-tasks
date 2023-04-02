import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionalRendering from "./components/ConditionalRendering";
import NotFound from "./components/NotFound";
import Home from "./Home";
import Task4 from "./Task4";
import "./App.css";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responding-to-events" element={<Task4 />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;