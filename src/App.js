import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
    return (
        <div className="App">
            {/* <Cursor /> */}
            {/* <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="About">
                <About />
            </section> */}
            <Projects />
            {/* <section id="Contact">
                <Contact />
            </section> */}
        </div>
    );
}

export default App;
