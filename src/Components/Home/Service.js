import React from "react";
import "./style.css";

const Service = ({ service, itemToShow }) => {
    const { title, img, price, address, placeType, reviews } = service;

    return (
        <div className="mr-4">
            <div>
                <img className={`w-full object-cover ${itemToShow === 4 ? "xl:h-[130px] lg:h-[150px] md:h-[150px] sm:h-[200px] h-[240px]" : "xl:h-[180px] lg:h-[150px] md:h-[150px] sm:h-[200px] h-[240px]"}`} src={img} alt="" />
            </div>

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
                    <span className="ml-2">{reviews}</span>
                </div>
            </div>
        </div>
    );
};

export default Service;
