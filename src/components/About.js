import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex">
                <h1 className ="title-font font-medium text-white">
                    About Ciara
                    <br className = "hidden lg:inline-block" />
                    Welcome to my React Portfolio
                </h1>
                <p className = "text-white">
                    I recently graduated from the Trilogy Coding Bootcamp at the <br/>
                    University of Utah. With no prior knowledge of coding, I have<br/>
                    been able to quickly learn all the tools and skills required <br/>
                    to be a full stack software developer. Below you will see some<br/>
                    major projects I have completed. Please reach out if you have<br/>
                    any questions!
                </p>
            </div>
        </section>
    );
}