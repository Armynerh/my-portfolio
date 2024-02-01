import Home from './components/Home';
import NavBar from './components/NavBar';
import MediaIcons from './components/MediaIcons';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <MediaIcons />
    </div>
  );
}

export default App;
