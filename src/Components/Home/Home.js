import React from "react";
import FilterSidebar from "./FilterSidebar";
import Services from "./Services";

const Home = () => {
    return (
        <main>
            <div className="container mx-auto">
                <div className="grid gap-5 grid-cols-12">
                    <div className="border col-span-3">
                        <FilterSidebar />
                    </div>
                    <div className="border col-span-9">
                        <Services />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
