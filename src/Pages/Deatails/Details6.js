import React from "react";
import fur1 from "../../assets/Portfolio images/Inventory/Inventory1.png";
import fur2 from "../../assets/Portfolio images/Inventory/Inventory2.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details6 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        The Inventory website (Furniture collections).
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={fur1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={fur2} class="w-96" alt="" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2  gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
      </div>
      <h5 className="text-left font-bold">
        <span className="text-xl text-green-600">Technologies Used: </span>
        HTML5, CSS3, React JS, Node JS, MongoDB, etc.
      </h5>
      <h5 className="text-left mt-9 font-bold">
        <span className="text-xl text-green-600 font-bold">
          Project Details:{" "}
        </span>
        This site details computer manufacturing web. Tools collections
        available. Some regular client her comments and ratings showins this
        website...
      </h5>
      <h2 className="text-xl text-green-600 font-bold mt-7">Featuers:</h2>
      <div className="ml-10">
        <li>This site details the Inventory/Warehouse special website.</li>
        <li>Furniture college useable.</li>
        <li>Furniture features,leatest blogs is showins this website.</li>
        <li>Users are also allowed to login and sign up.</li>
        <li>There is also validation.</li>
        <li>Users can access through of social networks (Google).</li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open(
              "https://warehouse-website-60530.firebaseapp.com/",
              "_blank"
            )
          }
          class="btn rounded-full resume-btn mr-5"
        >
          <span className="text-xl">
            <img className="w-7 h-7 mr-1" src={global} alt="" />
          </span>{" "}
          Live
        </button>
        <button
          onClick={() =>
            window.open(
              "https://github.com/AhsanMustafa665/warehouse-inventory-web-client"
            )
          }
          class="btn rounded-full resume-btn mr-5"
        >
          <span className="text-xl">
            <img className="w-7 h-7 mr-1" src={git} alt="" />
          </span>{" "}
          CLIENT GIT
        </button>
        <button
          onClick={() =>
            window.open(
              "https://github.com/AhsanMustafa665/warehouse-furniture-website-server"
            )
          }
          class="btn rounded-full resume-btn"
        >
          <span className="text-xl">
            <img className="w-7 h-7 mr-1" src={git} alt="" />
          </span>{" "}
          SERVER GIT
        </button>
      </div>
    </div>
  );
};
export default Details6;
