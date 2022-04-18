import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Login />

          {/* <div className="App-link-wrapper">
            <Link className="App-link" id="home-page-link" to="/">
              Home
            </Link>
            <Link className="App-link" id="about-page-link" to="/about">
              About
            </Link>
            <Link className="App-link" id="login-page-link" to="/login">
              Login
            </Link>
          </div> */}
        </header>
      </div>
    </Router>
  );
}

export default App;
