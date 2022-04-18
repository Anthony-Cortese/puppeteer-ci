import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>
      <span>Continious Integrations with Puppeteer and Jest</span>
    </h1>
    <div className="navigation">
      <Link className="navigation_link" to="/" exact="true">
        Home
      </Link>
      {/* <Link className="navigation_link" to="/login" exact="true">Login</Link> */}
    </div>
  </header>
);

export default Header;
