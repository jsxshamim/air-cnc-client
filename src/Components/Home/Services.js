import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Service from "./Service";
import "./style.css";

const Services = ({ services, children }) => {
    // slider
    const settings = {
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="mb-10">
            <div className="flex justify-between">
                <div className="font-bold text-2xl text-neutral mb-3">{children}</div>
                <Link to="/" className=" text-gray-500 pr-3">
                    See all
                    <i class="fa-solid fa-chevron-right  text-xs px-2"></i>
                </Link>
            </div>

            <div>
                <Slider {...settings}>
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;
