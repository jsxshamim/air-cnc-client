import React from "react";

const SafePeacefulDetail = () => {
  return (
    <div>
      {/* img here  */}
      <div className="img_container grid xs:grid-cols-1 sm:grid:cols-2 md:grid-cols-2 lg:gird-cols-2">
        <div className="border p-0 m-0">
          <img
            className="w-full"
            src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/188608725.jpg?k=a2da6cbd229671fdf59a11fcaf6352c3b97f2fc1c7099af6665dbeb6f6230579&o="
            alt=""
          />
        </div>
        <div className="border p-0 m-0">
          <img
            className="w-full"
            src="https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-IADGV_006-Dusk-Exterior-home.jpg"
            alt=""
          />
        </div>
      </div>
      {/* description here  */}
      <div className="img_container grid xs:grid-cols-1 sm:grid:cols-2 md:grid-cols-2 lg:gird-cols-2">
        <div className="border flex justify-between">
          <div className="w-3/5">
            <h1 className="text-2xl mx-2">
              Light bright airy stylish apt & safe paeacefull stay
            </h1>
            <p>
              <span className="font-bold text-grey mx-2">Dhaka</span>{" "}
              <span className="font-bold text-grey">Bangladesh</span>
            </p>
            {/* daynamic  */}
            <div>
              <small className="font-bold mx-2">4 badrom</small>
              <small className="font-bold mx-2">4 badrom</small>
              <small className="font-bold mx-2">4 badrom</small>
              <small className="font-bold mx-2">4 badrom</small>
            </div>
            <hr className="my-3" />
            {/* icon  */}
            <div className="mx-2 my-4">
              <h2>
                <i class="fa-solid fa-house-user"></i>{" "}
                <span className="ml-2 font-bold">Entire Home</span>
              </h2>
              <p className="ml-8">Lorem ipsum dolor sit amet.</p>
            </div>
            {/* icon  */}
            <div className="mx-2 my-4">
              <h2>
                <i class="fa-solid fa-house-user"></i>{" "}
                <span className="ml-2 font-bold">Entire Home</span>
              </h2>
              <p className="ml-8">Lorem ipsum dolor sit amet.</p>
            </div>
            {/* icon  */}
            <div className="mx-2 my-4">
              <h2>
                <i class="fa-solid fa-house-user"></i>{" "}
                <span className="ml-2 font-bold">Entire Home</span>
              </h2>
              <p className="ml-8">Lorem ipsum dolor sit amet.</p>
            </div>
            {/* icon  */}
            <div className="mx-2 my-4">
              <h2>
                <i class="fa-solid fa-house-user"></i>{" "}
                <span className="ml-2 font-bold">Entire Home</span>
              </h2>
              <p className="ml-8">Lorem ipsum dolor sit amet.</p>
            </div>
            <hr className="my-3" />
          </div>
          {/* user img */}
          <div className="w-2/5 text-end">
            <img
              class="mask mask-circle w-24"
              src="https://placeimg.com/160/160/arch"
              alt=""
            />
          </div>
        </div>
        {/* confirm form here code  */}
        <div className="border p-0 m-0">
            <h2>hello vai </h2>
          
        </div>
      </div>
      {/* paragrap */}
      <div className="img_container grid xs:grid-cols-1 sm:grid:cols-2 md:grid-cols-2 lg:gird-cols-2">
        <div className="border px-4 m-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptatum magni reprehenderit quo? Dolorem laudantium distinctio
            pariatur debitis exercitationem iusto sapiente aliquid inventore
            nobis sequi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptatum magni reprehenderit quo? Dolorem laudantium distinctio
            pariatur debitis exercitationem iusto sapiente aliquid inventore
            nobis sequi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptatum magni reprehenderit quo? Dolorem laudantium distinctio
            pariatur debitis exercitationem iusto sapiente aliquid inventore
            nobis sequi?
          </p>
          <p className="font-bold">
            <span>Read more hao ever</span>{" "}
            <i class="fa-solid fa-house-user"></i>
          </p>

          <div>
            <h1>Reviews</h1>
            <p>
              <i class="fa-solid fa-star text-success"></i>{" "}
              <span className="font-bold">4.9</span>
              <span className="font-bold pl-2">(20 Review)</span>
            </p>
          </div>
          <br />
          <br />
        </div>
        <div className="border p-0 m-0">helo</div>
      </div>
    </div>
  );
};

export default SafePeacefulDetail;
