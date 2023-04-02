import logo from './logo.svg';
import './App.css';
import Title from './components/title.js';
import Navbar from './components/navbar.js';
import Feature from './components/feature.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
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
