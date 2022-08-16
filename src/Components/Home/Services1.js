import React from "react";
import Service1 from "./Service1";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./style.css";
import { Link } from "react-router-dom";

const Services1 = () => {
  // slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //
  const services = [
    {
      id: 1,
      title: "Amdr7 Ultra-Thin Gaming ",
      name: "laptop",
      img: "https://i.ibb.co/mFkwbSn/laptop1.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },

    {
      id: 2,
      title: "Notebook 15.6 inch Laptop",
      name: "laptop",
      img: "https://i.ibb.co/YB1YQh3/laptop2.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },
    {
      id: 3,
      title: "J4105 14.1 Inch RAM 6GB",
      name: "laptop",
      img: "https://i.ibb.co/RNdyR2L/laptop3.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },

    {
      id: 4,
      title: "DDR4 8G J4105 14.1 Inch ",
      name: "laptop",
      img: "https://i.ibb.co/dmZLJcw/laptop4.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },
    {
      id: 4,
      title: "15.6 Inch Large Memory",
      name: "laptop",
      img: "https://i.ibb.co/XtnNxZB/laptop5.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },
    {
      id: 5,
      title: "Monster Tulpar T5 V20.3 ",
      name: "laptop",
      img: "https://i.ibb.co/PQrW2gX/laptop6.jpg",
      description: "Details product here",
      price: 25,
      rating: 20,
    },
  ];

  return (
    <div className="py-6 px-2">
      <div className="flex justify-between">
        <div className="font-bold text-2xl ml-1 text-gray-500">Experience</div>
        <div>
        <Link to="/" className=" mb-4 font-boldF rounded shadow my-3">
            See all
            <i class="fa-solid fa-chevron-right text-black text-1xl px-2 "></i>
          </Link>
        </div>
      </div>
      {/* carousel map*/}
      <div>
        <Slider
          {...settings}
          className="rounded"
        >
          {services.map(service => (
            <Service1 key={service.id} service={service}></Service1>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services1;
