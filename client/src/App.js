import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/websiteDetection" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
