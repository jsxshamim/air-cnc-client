import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Service from "./Service";
import "./style.css";

const Services = ({ services, children, itemToShow, maxHight }) => {
    // slider
    const settings = {
        slidesToShow: itemToShow,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                },
            },
            {
                breakpoint: 642,
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
                        <Service key={service.id} itemToShow={itemToShow} service={service}></Service>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;
