import React from 'react';
import homepage_image from './images/homepage.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={homepage_image} className="App-logo" alt="logo" />
        <p>
          Welcome to AgainstCold App! :)======
        </p>
      </header>
    </div>
  );
}

export default App;
