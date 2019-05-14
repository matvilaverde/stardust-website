import React from 'react';
import './App.css';
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* Go to Top button */}
      <div id="inner-nav-button">
        <a id="nav-link" href="#top"><span className="glyphicon glyphicon-menu-up"></span></a>
      </div>      
    </div>
  );
}

export default App;
