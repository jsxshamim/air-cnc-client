import React from "react";
import Services from "./Services";
const ServicesCard = () => {
    const services = [
        {
            id: 1,
            title: "Discover the cities party scene",
            address: "Uttara",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },

        {
            id: 2,
            title: "Notebook 15.6 inch Laptop",
            address: "Rajshahi",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "entertainment",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },
        {
            id: 3,
            title: "J4105 14.1 Inch RAM 6GB",
            address: "Jessore",
            img: "https://i.ibb.co/Fh1FmD8/gallery-bg.jpg",
            placeType: "photo class",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },

        {
            id: 4,
            title: "DDR4 8G J4105 14.1 Inch ",
            address: "Jhenaidah",
            img: "https://i.ibb.co/MMt2VZy/gallery4.jpg",
            placeType: "photography",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },
        {
            id: 4,
            title: "15.6 Inch Large Memory",
            address: "Bandorban",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "photo class",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },
        {
            id: 5,
            title: "Monster Tulpar T5 V20.3 ",
            address: "saint martin",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },

        {
            id: 6,
            title: "Amdr7 Ultra-Thin Gaming ",
            address: "Cox Bazar",
            img: "https://i.ibb.co/7zjs4JN/gallery1.jpg",
            placeType: "entertainment",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },

        {
            id: 7,
            title: "Notebook 15.6 inch Laptop",
            address: "Sylhet",
            img: "https://i.ibb.co/Bwf7y47/gallery2.jpg",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "experience",
        },
        {
            id: 8,
            title: "J4105 14.1 Inch RAM 6GB",
            address: "Bagura",
            img: "https://i.ibb.co/T4YzQVD/gallery3.jpg",
            placeType: "entertainment",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },

        {
            id: 9,
            title: "DDR4 8G J4105 14.1 Inch ",
            address: "Khulna",
            img: "https://i.ibb.co/WnfStWG/gallery8.jpg",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },
        {
            id: 10,
            title: "15.6 Inch Large Memory",
            address: "Mirpur",
            img: "https://i.ibb.co/KKgJVLb/gallery5.jpg",
            placeType: "photography",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },
        {
            id: 11,
            title: "Monster Tulpar T5 V20.3 ",
            address: "Chittagong",
            img: "https://i.ibb.co/NrQs1Qc/gallery6.jpg",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            rating: 20,
            category: "home",
        },
    ];

    const experienceCollection = services.filter((service) => service.category === "experience");
    const homeCollection = services.filter((service) => service.category === "home");

    return (
        <div>
            <Services itemToShow={4} services={experienceCollection}>
                Experience
            </Services>
            <Services itemToShow={3} services={homeCollection}>
                Homes
            </Services>
        </div>
    );
};

export default ServicesCard;
