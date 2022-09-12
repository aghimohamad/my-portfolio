import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx"
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
