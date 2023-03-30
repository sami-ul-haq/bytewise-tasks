import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./Home";
import Task4 from "./Task4";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responding-to-events" element={<Task4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;