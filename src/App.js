import React from 'react';
import LandingPage from "./components/LandingPage";
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="pages">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
