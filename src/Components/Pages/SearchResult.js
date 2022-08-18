import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import map from "../../Images/map.png";

const services = [
    {
        id: 1,
        title: "Discover the cities party scene",
        address: "Uttara",
        img: "https://i.ibb.co/XFyPDDB/photo-1522708323590-d24dbb6b0267.jpg",
        placeType: "nightlife",
        description: "Details product here",
        price: 25,
        category: "experience",
        rating: 4.9,
        reviews: 20,
        guests: 4,
        bedroom: 2,
        beds: 2,
        baths: 2,
        wifi: true,
        airCondition: true,
        kitchen: true,
        cancelationFlexibility: true,
    },

    {
        id: 2,
        title: "Notebook 15.6 inch Laptop",
        address: "Rajshahi",
        img: "https://i.ibb.co/fvbrN8m/the-atlantic-apartments-1br-classical-kitchen-solis.jpg",
        placeType: "entertainment",
        description: "Details product here",
        category: "experience",
        price: 25,
        rating: 4.8,
        reviews: 20,
        guests: 5,
        bedroom: 2,
        beds: 2,
        baths: 2,
        wifi: true,
        airCondition: true,
        kitchen: true,
        cancelationFlexibility: true,
    },
    {
        id: 3,
        title: "J4105 14.1 Inch RAM 6GB",
        address: "Jessore",
        img: "https://i.ibb.co/KbR3Wmj/201916769776917542.jpg",
        placeType: "photo class",
        description: "Details product here",
        category: "home",
        price: 15,
        rating: 4.5,
        reviews: 18,
        guests: 4,
        bedroom: 2,
        beds: 2,
        baths: 2,
        wifi: true,
        airCondition: false,
        kitchen: true,
        cancelationFlexibility: true,
    },
];

const SearchResult = () => {
    return (
        <div>
            <div className="w-[90%] mx-auto p-2 lg:grid grid-cols-2 gap-10">
                <div>
                    <p className="text-neutral">252 stays Apr 13-17, 3 guests</p>
                    <h3 className="text-2xl font-bold">Stay in Dhaka Division</h3>
                    <div className="filter-items flex flex-wrap justify-between gap-3 my-3">
                        <button className="btn btn-outline btn-sm rounded-3xl">Cancelation flexibility</button>
                        <button className="btn btn-outline btn-sm rounded-3xl">Type of place</button>
                        <button className="btn btn-outline btn-sm rounded-3xl">Price</button>
                        <button className="btn btn-outline btn-sm rounded-3xl">Air Condition</button>
                    </div>
                    <div className="service-items">
                        {services.map((service) => {
                            const { wifi, airCondition, kitchen, guests, bedroom, baths, beds, cancelationFlexibility, price, rating, reviews, img, title } = service;
                            return (
                                <div className="service flex gap-8 my-8 border-b-2 pb-8 last:border-b-0">
                                    <div className="w-5/12">
                                        <img className="w-full rounded-2xl h-full object-cover" src={img} alt="" />
                                    </div>
                                    <div className="w-7/12">
                                        <h2 className="text-xl font-bold">{title}</h2>
                                        <p className="my-3">{`${guests} guests ${bedroom} bedroom ${beds} beds ${baths} baths`}</p>

                                        <p className="my-3">
                                            {wifi && "Wifi"} {airCondition && "Air Conditioning"} {kitchen && "Kitchen"}
                                        </p>

                                        {cancelationFlexibility && <p>Cancelation Flexibility Available</p>}

                                        <div className="flex justify-between mt-5">
                                            <p className="font-bold">
                                                <FontAwesomeIcon className="text-primary" icon={faStar} /> {rating} ({reviews})
                                            </p>
                                            <p className="pr-10">
                                                <span className="font-bold">${price}</span>/night
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img className="w-full h-full" src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
