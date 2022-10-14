import React, {Component} from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ".//App.css";

class App extends Component {
  render(){
    return (
      <HashRouter>
      <div>
          <h1>Welcome!</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/About" element={<About />}/>
             <Route path="/projects" element={<Projects />}/>
             <Route path="/resume" element={<Resume />}/>
             <Route path="/contact" element={<Contact />}/>
             </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
