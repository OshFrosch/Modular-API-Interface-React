import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/overview" element={<h1>Overview</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// <Router>
//       <h1>Hello my Friend. I will be the Navbar some day in the future.</h1>
//       <Routes>
//         <Route path="/" element={<button>Check this out</button>}></Route>
//         <Route path="/login" element={<input></input>}></Route>
//       </Routes>
//     </Router>
