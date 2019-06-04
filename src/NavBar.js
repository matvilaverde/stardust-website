import React, { Component } from 'react'
import SSLogo from './images/LogoHome.png'
import { SocialIcon } from 'react-social-icons'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="logo" href="/"><img src={SSLogo} alt="Stardust Studios Logo"/></a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="http://blog.starduststudios.com.br">Blog</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><SocialIcon url="https://www.linkedin.com/company/stardust-studio" target="_blank" bgColor='white' style={{ height: 25, width: 25, 'margin-top': '35%' }} /></li>
                    <li><SocialIcon url="http://www.facebook.com/starduststd" target="_blank" bgColor='white' style={{ height: 25, width: 25, 'margin-top': '35%'  }} /></li>
                    <li><SocialIcon url="https://twitter.com/oficialstardust/" target="_blank" bgColor='white' style={{ height: 25, width: 25, 'margin-top': '35%'  }} /></li>
                    <li><SocialIcon url="https://www.instagram.com/oficialstardust/" target="_blank" bgColor='white' style={{ height: 25, width: 25, 'margin-top': '35%' }} /></li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default NavBar;