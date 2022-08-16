import { faMinus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import { useForm } from "react-hook-form";

const FilterSidebar = () => {
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [babies, setBabies] = useState(0);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {};

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control mb-5 shadow-lg shadow-gray-100 py-4 px-5 rounded-xl border border-[#fbf9f9]">
                    <label>
                        <p className="uppercase font-bold">Location</p>
                        <input type="text" placeholder="Add city, landmark or address" class="focus:outline-none pr-5 w-full py-2" />
                    </label>
                </div>

                <div className="xl:flex gap-3">
                    <div class="mb-5 form-control shadow-lg shadow-gray-100 py-4 px-5 rounded-xl border border-[#fbf9f9] w-full">
                        <label>
                            <p className="uppercase font-bold">Arrival</p>
                            <input className="w-full focus:outline-none" type="date" name="arrival" id="arrival" />
                        </label>
                    </div>
                    <div class="mb-5 form-control shadow-lg shadow-gray-100 py-4 px-5 rounded-xl border border-[#fbf9f9] w-full">
                        <label>
                            <p className="uppercase font-bold">Departure</p>
                            <input className="w-full focus:outline-none" type="date" name="departure" id="departure" />
                        </label>
                    </div>
                </div>

                <div className="mb-5 form-control shadow-lg shadow-gray-100 rounded-xl border border-[#fbf9f9] w-full">
                    <div className="border-b px-5 py-4">
                        <p className="text-gray-400">Guests</p>
                        <h4 className="font-bold text-base uppercase">
                            {adult > 0 && `${adult}  Adults,`} {child > 0 && `${child} Child,`} {babies > 0 && `${babies} Babies`}
                        </h4>
                    </div>

                    <div className="px-5">
                        <div className="flex justify-between py-3 pt-5">
                            <div>
                                <h4 className="text-base font-bold uppercase">Adults</h4>
                                <span className="text-sm text-gray-300">Greater then 12</span>
                            </div>
                            <div>
                                <button className="disabled:text-gray-300" disabled={adult < 1 && "disabled"} onClick={() => setAdult(adult - 1)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input value={adult} className="font-bold text-lg w-14 focus:outline-none text-center" type="text" />
                                <button className="disabled:text-gray-300" disabled={adult >= 5 && "disabled"} onClick={() => setAdult(adult + 1)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between py-3">
                            <div>
                                <h4 className="text-base font-bold uppercase">Child</h4>
                                <span className="text-sm text-gray-300">Age 2-12</span>
                            </div>
                            <div>
                                <button className="disabled:text-gray-300" disabled={child < 1 && "disabled"} onClick={() => setChild(child - 1)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input value={child} className="font-bold text-lg w-14 focus:outline-none text-center" type="text" />
                                <button className="disabled:text-gray-300" disabled={child >= 5 && "disabled"} onClick={() => setChild(child + 1)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between py-3">
                            <div>
                                <h4 className="text-base font-bold uppercase">Babies</h4>
                                <span className="text-sm text-gray-300">Younger then 2</span>
                            </div>
                            <div>
                                <button className="disabled:text-gray-300" disabled={babies < 1 && "disabled"} onClick={() => setBabies(babies - 1)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input value={babies} className="font-bold text-lg w-14 focus:outline-none text-center" type="text" />
                                <button className="disabled:text-gray-300" disabled={babies >= 5 && "disabled"} onClick={() => setBabies(babies + 1)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="capitalize text-base font-medium btn bg-gradient-to-r from-primary to-accent text-white border-0 w-full">
                    <FontAwesomeIcon className="mr-2" icon={faSearch} /> Search
                </button>
            </form>
        </div>
    );
};

export default FilterSidebar;
