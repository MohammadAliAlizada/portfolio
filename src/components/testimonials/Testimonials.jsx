import React from 'react';
import './testimonial.css';
import { Data } from './Data';
// import swiper react component

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className="testimonial container section" id="projects">
            <h2 className="section__title">My Projects Samples</h2>
            <span className="section__subtitle">Feel free and enjoy</span>

            <Swiper
                className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },


                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, name, image, url }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>

                            <a className="testimonial__name" href={url}>{name}</a>
                            <br />

                            <a className="testimonial__name" href={url}><img src={image} alt="" className="testimonial__img" /></a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials
