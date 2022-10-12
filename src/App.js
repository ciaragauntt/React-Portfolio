import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
    return (
        <main className =" text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
        </main>
    );
}