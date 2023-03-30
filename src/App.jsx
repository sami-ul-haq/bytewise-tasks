import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Task4 from "./Task4";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responding-to-events" element={<Task4 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;