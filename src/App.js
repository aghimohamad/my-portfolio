import About from "./components/About.jsx";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <About />
    </div>
  );
}

export default App;
