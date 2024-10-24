import "./App.css";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Recipe from "./Component/Recipe";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection />
      <Recipe></Recipe>
    </>
  );
}

export default App;
