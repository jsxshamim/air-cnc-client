import React from "react";
import FilterSidebar from "./FilterSidebar";
import ServicesCard from "./ServicesCard";

const Home = () => {
    return (
        <main>
            <div className="w-[90%] mx-auto">
                <h2 className="font-bold text-xl mb-10">Where do you want to go</h2>
                <div className="md:grid md:gap-14 gap-20 grid-cols-12">
                    <div className="col-span-4">
                        <FilterSidebar />
                    </div>

                    <div className="col-span-8">
                        <ServicesCard />

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
