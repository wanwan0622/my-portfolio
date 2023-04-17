import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title.js';
import Navbar from './components/Navbar.js';
import Feature from './components/Feature.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import MouseStalker from './components/MouseStalker';

function App() {
  return (
    <div className="App">
      <MouseStalker />
      <Title />
      <Navbar />
      <Feature />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
