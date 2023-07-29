import React, { useState } from 'react';

import "./header.css";

const Header = () => {
    /* Change Background Header */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /* Toggle menu */
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <div>
            <header className="header">

                <nav className="nav container">
                    <a href="index.html" className="nav__logo">M Ali Alizada</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav_item">
                                <a href="#" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                            </li>

                            <li className="nav_item">
                                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-user nav__icon"></i>About
                            </a>
                            </li>

                            <li className="nav_item">
                                <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                            </li>

                            {/* <li className="nav_item">
                            <a href="#services"onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                         </li> */}

                            <li className="nav_item">
                                <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                            </li>

                            <li className="nav_item">
                                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                            </li>
                            {/* <li className="mood">

                                <img className="dark_mode" src="/moon.png" />
                            </li> */}
                        </ul>

                        <i className="uil uil-times nav__close " onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps" ></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
