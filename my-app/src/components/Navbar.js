import React from "react";

const Navbar = () => {
    return (
            <nav class="navbar">
                    <div class="navbar-name">
                        <a class="navbar-brand" href="#About">Ciara Gauntt</a>
                    </div>

                    <div class="nav-items">
                        <ul class="navbar nav">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#resume">RESUME</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
            </nav>
    )
};

export default Navbar;