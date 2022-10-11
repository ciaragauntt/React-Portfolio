import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
    const [Nav] = useState(['about', 'portfolio', 'contact', 'resume']);
    const [currentNav, setCurrentNav]= useState(Nav[0]);

    function renderComponent(currentNav) {
        switch(currentNav) {
            case 'about':
                return <About />;
            case 'portfolio':
                return <Project />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    }
    return (
        <div className = 'app'>
            <Header currentNav = {currentNav} setCurrentNav = {setCurrentNav} />
            <main>
                {renderComponent(currentNav)}
            </main>
            <Footer />
        </div>
    );
}

export default App;