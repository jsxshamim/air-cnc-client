import React from "react";
import "./style.css";

const Service = ({ service }) => {
    const { title, img, price, rating, address, placeType } = service;

    return (
        <div className="mr-4">
            <figure>
                <img className="w-full xl:h-[130px] lg:h-[170px] h-[270px] object-cover" src={img} alt="Shoes" />
            </figure>
            <div>
                <h2 class="text-xs uppercase text-secondary font-bold my-1">
                    {placeType} - {address}
                </h2>
                <h2 class="text-md font-bold text-neutral">{title.split(" ").slice(0, 4).join(" ")}</h2>
                <p className="mt-1 text-sm">${price} per person</p>
                <div className="flex items-center mt-1">
                    <div className="rating">
                        <i class="fa-solid fa-star text-success text-xs"></i>
                        <i class="fa-solid fa-star text-success text-xs"></i>
                        <i class="fa-solid fa-star text-success text-xs"></i>
                        <i class="fa-solid fa-star text-success text-xs"></i>
                        <i class="fa-solid fa-star text-success text-xs"></i>
                    </div>
                    <span className="ml-2">{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default Service;
