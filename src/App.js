import React from 'react';
import './App.css';
import NavBar from './NavBar.js'
import { Route } from 'react-router-dom'

import dietopass from './images/dietopass/thumbnail.png'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" render={() => (
        <main>
          <h1>Welcome to<br />Stardust Studios!</h1>
          <hr />
          <p>Com sede em Belo Horizonte, MG e integrantes em Manaus, AM,<br />a Stardust Studios é uma empresa independente focada em jogos e aplicativos únicos e criativos.</p>

          <section>
            <div class="container">
              <h1>Projects</h1>
              <hr class="divider" />
            </div>
            <div class="row">
              <div class="col">
                <article class="thumbnail__container">
                  <div class="thumbnail__inner thumbnail--portfolio">
                    <div class="thumbnail__overlay">
                      <div class="thumbnail__info">
                        <h2 class="thumbnail__title">Die to Pass</h2>
                        <p class="thumbnail__excerpt">Control an angel walking through the hospital saving souls in this captivating puzzle.</p>
                        <a href="#dietopass" role="button">See Project</a>
                      </div>
                    </div>
                    <img class="thumbnail__image" src={dietopass} alt="Die to Pass thumbnail" />
                  </div>
                </article>
              </div>
            </div>
          </section>
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
