import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionalRendering from "./components/ConditionalRendering";
import RenderingLists from "./components/RenderingLists";
import NotFound from "./components/NotFound";
import Task4 from "./Task4";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Food from "./components/Food";
import Counter from "./components/Counter";
import ExpenseTracker from "./components/ExpenseTracker";
import RecipeApp from "./components/RecipeApp";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responding-to-events" element={<Task4 />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/rendering-list" element={<RenderingLists />} />
          <Route path="/react-routing" element={<RenderingLists />} />
          <Route path="/food/:title" element={<Food />} />
          <Route path="/usestate-useeffect" element={<Counter />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/recipe-project" element={<RecipeApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;