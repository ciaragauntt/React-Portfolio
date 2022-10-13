import React from "react";

export default function Navbar() {
    return (
        <header>
            <div className="conatiner">
                <a>
                    <a href="#about">
                        Ciara Gauntt
                    </a>
                </a>
                <nav>
                    <a href="#projects">
                        PROJECTS
                    </a>
                    <a href="#resume">
                        RESUME
                    </a>
                    <a href="#contact">
                        CONTACT
                    </a>
                </nav>
            </div>
        </header>
    );
}