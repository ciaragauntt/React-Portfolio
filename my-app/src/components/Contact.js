import React, { Component } from "react";

class Contact extends Component {
    render(){
    return (
        <section id="contact">
            <div>
                <h2>
                    EMAIL
                </h2>
                <p>
                    ci.gauntt@gmail.com
                </p>
            </div>
            <div>
                <h2>
                    GITHUB
                </h2>
                <a>
                https://github.com/ciaragauntt
                </a>
            </div>
            <div>
                <h2>
                    LinkedIn
                </h2>
                <a>
                https://www.linkedin.com/in/ciara-gauntt-01404618b/
                </a>
            </div>
            <form>
                <h2>
                    HIRE ME
                </h2>
                <p>
                    If you liked what you saw in this portfolio, make sure to reach out to me!
                </p>
                <div>
                    <label htmlFor="name">
                        NAME
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        />
                </div>
                <div>
                    <label htmlFor="email">
                        EMAIL
                    </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    />
                </div>
                <div>
                    <label htmlFor="message">
                        MESSAGE
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        />
                </div>
                <button
                    type="submit"
                    SUBMIT 
                    />
            </form>
        </section>
    );
    }
}

export default Contact;