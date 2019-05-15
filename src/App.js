import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import NavBar from './NavBar.js'
import Projects from './Projects.js'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" render={() => (
        <main>
          <h1>Welcome to<br />Stardust Studios!</h1>
          <hr />
          <p>With headquarters in Belo Horizonte, MG and members in Manaus, AM,<br />Stardust Studios is an indie company focused on games and unique and creative applications.</p>

          <Projects />
          <Link to="/portfolio"><button>Portfolio</button></Link>
        </main>
      )}/>

      {/* Go to Top button */}
      <div id="inner-nav-button">
        <a id="nav-link" href="#top"><span className="glyphicon glyphicon-menu-up"></span></a>
      </div>      
    </div>
  );
}

export default App;
