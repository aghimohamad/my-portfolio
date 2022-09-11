import About from "./components/About.jsx";
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
    </div>
  );
}

export default App;
