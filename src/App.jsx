import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import Home from "./components/dashboard/home/Home";
// import HomePage from "./components/dashboard/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard/home" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
