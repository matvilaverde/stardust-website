import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dietopass from './images/dietopass/thumbnail.png'
import geopedia from './images/geopedia/thumbnail.png'
import apostafacil from './images/apostafacil/thumbnail.png'
import yourproject from './images/yourproject/thumbnail.png'

class Projects extends Component {
    render() {
        return (
            <section>
            <div className="container">
              <h1>Projects</h1>
              <hr className="divider" />
            </div>
            <div className="row">
              <div className="col-3">
                <article className="thumbnail__container">
                  <div className="thumbnail__inner thumbnail--portfolio">
                    <div className="thumbnail__overlay">
                      <div className="thumbnail__info">
                        <h2 className="thumbnail__title">Die to Pass</h2>
                        <p className="thumbnail__excerpt">Control an angel walking through the hospital saving souls in this captivating puzzle.</p>
                        <Link href="/projects/dietopass" role="button">See Project</Link>
                      </div>
                    </div>
                    <img className="thumbnail_image" src={dietopass} alt="Die to Pass thumbnail" />
                  </div>
                </article>
              </div>
              <div className="col-3">
                <article className="thumbnail__container">
                  <div className="thumbnail__inner thumbnail--portfolio">
                    <div className="thumbnail__overlay">
                      <div className="thumbnail__info">
                        <h2 className="thumbnail__title">GeoPedia</h2>
                        <p className="thumbnail__excerpt">Guess the country with the fewest possible tips and earn more points than your friends!</p>
                        <Link to="/projects/geopedia" role="button">See Project</Link>
                      </div>
                    </div>
                    <img className="thumbnail_image" src={geopedia} alt="GeoPedia thumbnail" />
                  </div>
                </article>
              </div>
              <div className="col-3">
                <article className="thumbnail__container">
                  <div className="thumbnail__inner thumbnail--portfolio">
                    <div className="thumbnail__overlay">
                      <div className="thumbnail__info">
                        <h2 className="thumbnail__title">Aposta Fácil</h2>
                        <p className="thumbnail__excerpt">Check results from the latest raffles on your phone for the top CEF bets!</p>
                        <Link to="/projects/apostafacil" role="button">See Project</Link>
                      </div>
                    </div>
                    <img className="thumbnail_image" src={apostafacil} alt="Aposta Facil thumbnail" />
                  </div>
                </article>
              </div>
              <div className="col-3">
                <article className="thumbnail__container">
                  <div className="thumbnail__inner thumbnail--portfolio">
                    <div className="thumbnail__overlay">
                      <div className="thumbnail__info">
                        <h2 className="thumbnail__title">Your Project Here!</h2>
                        <p className="thumbnail__excerpt">Do you want to do a project with us? Contact us and schedule a visit!</p>
                        <Link to="/contact" role="button">Get in Touch</Link>
                      </div>
                    </div>
                    <img className="thumbnail_image" src={yourproject} alt="Your project here thumbnail" />
                  </div>
                </article>
              </div>
            </div>
          </section>
        )
    }
}

export default Projects 
