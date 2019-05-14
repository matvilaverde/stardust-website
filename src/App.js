import React from 'react';
import './App.css';
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* Go to Top button */}
      <div id="inner-nav-button">
        <a id="nav-link" onclick href="#top"><i class="material-icons">expand_less</i></a>
      </div>      
    </div>
  );
}

export default App;
