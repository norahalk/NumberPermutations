import React, { Component, useState } from 'react';
import { Link } from 'react-scroll';
import Sticky from 'react-stickynode';

class Menu extends Component {
    render() {
        var { mClass, nClass, cClass, slogo } = this.props;

        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                    <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                        <div className={`container ${cClass}`}>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_toggle">
                                    <span className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <span className="hamburger-cross">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </span>
                            </button>
                            <Link className={`navbar-brand ${slogo}`} to="/">
                                <img style={{ margin: window.innerWidth < 768 ? "auto" : null }} src={require("../img/boubyanLogo.png")} width="50%" alt="" />
                                <img style={{ margin: window.innerWidth < 768 ? "auto" : null }} src={require("../img/boubyanLogo.png")} width="50%" alt="logo" />
                            </Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                    <li className="nav-item">
                                        <Link className="nav-link" activeClass="active" to="ref" spy={true} smooth={true} offset={0} duration={500}>References</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </nav>
                </header>
            </Sticky>
        );
    }
}

export default Menu;