import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const myRef = useRef(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500)
  }, [])

  return (
<div className="App">
  {loader ? (
    <div className='container-fluid'>
      <div className="loader-container">
        <div>
          <img className="spinner" src="./tap.png" alt="Loader"></img>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )}
</div>
  );
}

export default App;
