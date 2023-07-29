import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ali</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/muhammadali.alizada" className="footer__social-link" target="_blank"><i className="bx bxl-facebook"></i></a>

                    <a href="https://www.linkedin.com/in/mohammad-ali-alizada-a0635718b/" className="footer__social-link" target="_blank"><i className="bx bxl-linkedin"></i></a>

                    <a href="https://github.com/mohammadalializada" className="footer__social-link" target="_blank"><i className="bx bxl-github"></i></a>

                </div>
                <span className="footer__copy">
                    &#169; All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
