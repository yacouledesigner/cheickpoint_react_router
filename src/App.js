import React, { useEffect } from 'react';
import './App.css';
import Accueil from './components/pages/Accueil';
import Cours from './components/pages/Cours';
import Formation from './components/pages/Formation';
import Service from './components/pages/Service';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Route,Routes,useNavigate, useLocation, useParams } from 'react-router-dom';

function App() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const params = useParams();
  
  // // useEffect(() => {
  // //   setInterval(() => {
  // //     console.log(params);
  // //   }, 10000);
  // // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/Cours" element={<Cours/>}/>
        <Route path="/Formation" element={<Formation/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
