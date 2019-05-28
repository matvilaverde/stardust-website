import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoHome from './images/LogoHome.png';

class NavBar extends Component {
    render() {
        return (
            <ul className="navbar">
                <li><Link to="/"><img className="home-btn" src={LogoHome} alt="Home"/></Link></li>
                <li className="active"><Link to="/about">About</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/apps">Apps</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="blog-btn"><a href="https://blog.starduststudios.com.br">Blog</a></li>
            </ul>
        )
    }
}

export default NavBar;