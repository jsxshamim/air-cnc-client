import React from "react";
import FilterSidebar from "./FilterSidebar";
import ServicesCard from "./ServicesCard";


const Home = () => {
    return (
        <main>
            <div className="container mx-auto">
                <div className="grid gap-20 grid-cols-12">
                    <div className="col-span-4">
                        <FilterSidebar />
                    </div>

                    <div className="border col-span-8">
                        <Services />

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
