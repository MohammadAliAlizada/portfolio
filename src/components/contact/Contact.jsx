import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const senddata = await emailjs.sendForm('service_aci4u7f', 'template_1hbk0td', form.current, 'ssrO_e1Mqm0LHN233')
        e.target.reset()
        console.log(senddata.text)
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-envelope contact__card_icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">malializada1@gmail.com</span>

                            <a href="" className="contact__button">write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card_icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+923335053542</span>

                            <a href="" className="contact__button">call me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>



                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input required type="text" className="contact__form-input" name="name" placeholder="Write your name" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input required type="email" className="contact__form-input" name="email" placeholder="Write your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className=" contact__form-tag">project</label>
                            <textarea required name="project" className=" contact__form-input" cols="30" rows="10" placeholder="write your project"></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Messege
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
