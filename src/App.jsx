import './App.css'
import Home from "./Components/Pages/Home.jsx"
import About from "./Components/Pages/About.jsx"
import Header from './Components/Pages/Header.jsx'
import Experience from './Components/Pages/Experience.jsx';
import Education from './Components/Pages/Education.jsx';
import Skills from './Components/Pages/Skills.jsx';
import Projects from './Components/Pages/Projects.jsx';
import Footer from './Components/Pages/Footer.jsx';


function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">      
      <div className="relative z-10">
        <Header />
        <main className="w-full">
          <Home />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;