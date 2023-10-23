import Navbar from "./components/navbar/Navbar";
import "./scss/App.scss";

function App() {
    return (
        <div className="App">
            <section id="Homepage">
                <Navbar />
            </section>
            <section id="About">About</section>
            <section id="Projects">Projects</section>
            <section id="Contact">Contact</section>
        </div>
    );
}

export default App;
