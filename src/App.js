import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App2 from "./App2";
import Home from "./pages/Home";
import ProperyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/property" element={<Home />} />
        <Route path="/property/:id" element={<ProperyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
