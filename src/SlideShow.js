import React, { Component } from 'react';
import Slider from 'react-slick';

class SlideShow extends Component {
    render() {
        return (
            <div className="container">
            <Slider
                dots = {true}
                infinite = {true}
                speed = {500}
                slidesToShow = {1}
                slidesToScroll = {1}
            >
                <div className="dietopass-bg">
                    <h2 className="description">Die to Pass is available for free on Game Jolt!</h2>
                    <button>Read More</button>
                </div>
                <div>
                    <h2>Slide #2</h2>
                    <p className="description">This is the second image's description in pink!<br/> And a paragraph with more text!</p>
                </div>
                <div>
                    <h2>Slide #3</h2>
                    <p className="description">This is the third image's description in pink!<br/> And a paragraph! <br/> Make it two paragraphs!</p>
                </div>
            </Slider>
            </div>
        )
    }
}

export default SlideShow;