import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';



function App() {

  return(
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
         

      </Routes>
    </Router> 


  )
 
}

export default App;