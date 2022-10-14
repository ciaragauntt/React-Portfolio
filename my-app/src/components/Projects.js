import React, { Component } from "react";
import { projects } from "../data";

class Projects extends Component{
    render() {
    return (
        <section id="projects" className =" text-gray-400 body-font">
            <div className="conatiner">
                <div className ="flex">
                    <h1 className =" title-font text-white">
                        Projects
                    </h1>
                    <p>
                        Here you will find all of the projects I have worked on 
                        over the past 6 months. Enjoy!
                    </p>
                </div>
                <div className = "flex flex-wrap">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className = "sm: w-1/2 w-100 p-4">
                            <div className = "felx relative">
                                <img 
                                    alt="project-gallery"
                                    src={project.image}
                                />
                                <div>
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h1>
                                        {project.title}
                                    </h1>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            </a>
                    ))}
                </div>
            </div>
        </section>
    );
                    }
}

export default Projects;