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
        </header>
      </div>
    </Router>
  );
}

export default App;
