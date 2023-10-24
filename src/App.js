import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./scss/App.scss";

function App() {
    return (
        <div className="App">
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="About">About</section>

            <Projects />

            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
