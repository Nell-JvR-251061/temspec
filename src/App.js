// import logo from './logo.svg';
import './App.css'; //App's styling document

//Self-Developed Components
import NavBar from './components/Navbar';

//Router Imports
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from './pages/Landing';
import Compare from './pages/Compare';
import Timeline from './pages/Timeline';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      <footer>
          <h4>Footer</h4>
      </footer>
    </BrowserRouter>


  );
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>