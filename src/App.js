import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import {Home} from './Home';
import {Contact} from './Contact';
import {About} from './About';
import {Content} from './Content';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/projects" element={<Content />} />
       
      </Routes>
   

   
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;