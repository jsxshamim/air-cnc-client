import React from "react";
import "./style.css";

const Service1 = ({ service }) => {
  const { title, img, price, rating, name } = service;

  // console.log(service);
  return (
    // shadow-xl
    // customShadow
    <div class=" mx-1 card-compact customShadow">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-sm ">{name}</h2>
        <h2 class="card-title text-sm">{title?.slice(0, 14)}</h2>
        <p>${price} per person</p>
        <p>
          <i class="fa-solid fa-star text-success"></i>
          <i class="fa-solid fa-star text-success"></i>
          <i class="fa-solid fa-star text-success"></i>
          <i class="fa-solid fa-star text-success"></i>
          <i class="fa-solid fa-star text-success"></i>
          <span className="ml-2">{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default Service1;
