// App.js

import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import LatestNews from "./pages/LatestNews";
import ContactForm from "./pages/ContactForm";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/latest-news/">Latest News</Link>
            </li>
            <li>
              <Link to="/contact/">Contact Me</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-news/" element={<LatestNews />} />
          <Route path="/contact/" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
