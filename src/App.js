// App.js

import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import EthereumPrice from "./EthereumPrice";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <img
          src="https://euc.li/dormin.eth"
          alt="Dormin Profile Pic"
          className="profile-pic"
        />
        <div className="profile-info">
          <h1>Dormin</h1>
          <p>Web3 Early Adopter · Crypto Researcher</p>
          <a
            href="https://link3.to/serious"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3 links hub
          </a>
        </div>
      </div>
      <p className="welcome-text">
        Welcome to my website!
      </p>
      <p className="welcome-text">
        <Link to="/contact/">Feel free to reach out and connect!</Link>
      </p>
      <EthereumPrice />
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
            {/* <li>
              <Link to="/contact/">Contact Me</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
