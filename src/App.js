import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
