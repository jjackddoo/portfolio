import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Skills />
    <Project />
    <Footer />
  </div>
  );
}

export default App;