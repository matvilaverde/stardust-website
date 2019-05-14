import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav role="navigation">
                <p class="footer__copy text--small">contato@starduststudios.com.br</p>
                <ul class="list list--end list--media list--footer">
                    <li><a href="http://www.facebook.com/starduststd" rel="noopener noreferrer" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/stardust-studio" rel="noopener noreferrer" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/oficialstardust/" rel="noopener noreferrer" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/oficialstardust/" rel="noopener noreferrer" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;