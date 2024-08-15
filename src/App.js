import './App.css';
import { BrowserRouter ,Routes,Route,} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import {Home} from './Home';
import {Contact} from './Contact';
import {About} from './About';
import {Content} from './Content';


function App() {

  const [activeSocorros, setActiveSocorros] = useState(false);
  const [activescraper, setActiveScraper] = useState(false);
  const [activeStreet, setActiveStreet] = useState(false);

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/projects" element={<Content
         activeSocorros={activeSocorros}
          activeScraper={activescraper}
          setActiveSocorros={setActiveSocorros}
          setActiveScraper={setActiveScraper}
          activeStreet={activeStreet}
          setActiveStreet={setActiveStreet}
          />} />
       
      </Routes>
   

   
    
    </div>
    </BrowserRouter>
  );
}

export default App;