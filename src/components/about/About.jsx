import React from 'react';
import "./about.css";
import AboutImg from "../../assets/por1.jpg";
import CV from "../../assets/cv.pdf";
import Info from './Info';
const About = () => {
    return (
        <section className="about section " id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid  ">
                <img src={AboutImg} alt="" className="about__img " />

                <div className="about__data">
                    <Info />
                    <p className="about__description">I Graduated from Kabul University computer science faculty. I have over 2 years of experience on web development in different types of organizations and freelancing.
                    All of the companies and my happy clients are from Asia and Afghanistan. I also participated in holding a lot of informational and tech seminars and did voluntarily jobs.
                    I also can configure and deploy the project to any hosting provider, Amazon Web Servers (AWS) and CPanel Host Providers.</p>
                    {/* <a download="" href={CV} className="button button--flex">Download CV
                <svg
                            className="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path fill="var(--container-color)" d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z" /></svg>
                    </a> */}
                </div>

            </div>
        </section>

    )
}

export default About
