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

      <Route path="/about" render={() => (
        <div>
          <h1>About!</h1>
          <p>There's nothing here yet, please, go back, use navbar or click this button:</p>
          <Link to="/"><button>Send Me Home</button></Link>
        </div>
      )} />
      <Route path="/portfolio" render={() => (
        <div>
          <h1>Portfolio!</h1>
          <p>There's nothing here yet, please, go back, use navbar or click this button:</p>
          <Link to="/"><button>Send Me Home</button></Link>
        </div>
      )} />
      <Route path="/contact" render={() => (
        <div>
          <h1>Contact!</h1>
          <p>There's nothing here yet, please, go back, use navbar or click this button:</p>
          <Link to="/"><button>Send Me Home</button></Link>
        </div>
      )} />
    </div>
  );
}

export default App;
