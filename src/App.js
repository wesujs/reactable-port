import About from "./components/About";
import Contact from './components/Contact'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from './components/Work';
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
