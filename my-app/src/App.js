import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import ".//App.css";

function App() {
    return (
        <main>
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
        </main>
    );
}

export default App;
