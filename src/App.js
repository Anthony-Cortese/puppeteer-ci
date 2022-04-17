import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

// function Home() {
//   return (
//     <p className="App-welcome-text">
//       <code>This is the HomePage</code>
//     </p>
//   );
// }

// function About() {
//   return <p className="App-welcome-text">This is the about page.</p>;
// }

// function Login() {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = (event) => {
//     event.preventDefault();

//     if (email === "username@gmail.com" && password === "password") {
//       setIsUserLoggedIn(true);
//     } else {
//       setIsUserLoggedIn(false);
//       setError(true);

//       setTimeout(() => {
//         setError(false);
//       }, 12000);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="form-wrapper">
//         <p className="App-welcome-text">This is the Login page.</p>
//         <h1 className="form-header">Login form</h1>
//         {!isUserLoggedIn && (
//           <form className="form" onSubmit={login}>
//             {error && (
//               <p className="form-error-text">
//                 Please enter a correct username/password.
//               </p>
//             )}

//             <input
//               type="email"
//               required
//               placeholder="Email Address"
//               className="form-input form-input__email"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <input
//               type="password"
//               required
//               placeholder="Password"
//               className="form-input form-input__password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />

//             <button type="submit" className="form-submit-button">
//               Button
//             </button>
//           </form>
//         )}
//         {isUserLoggedIn && (
//           <p className="form-success-message">You are now signed in.</p>
//         )}
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            {/* <Route path="/about" element={<About />} /> */}

            {/* <Route path="/login" element={<Login />} /> */}

            <Route path="/" element={<Home />} />
          </Routes>

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
