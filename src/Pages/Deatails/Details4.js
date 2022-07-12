import React from "react";
import per1 from "../../assets/Portfolio images/Perfume/Perfume1.png";
import per2 from "../../assets/Portfolio images/Perfume/screencapture-the-perfume-reviews-site-netlify-app-dashboard-2022-06-11-18_06_55.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details4 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        The Perfume analysis
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={per1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={per2} class="w-96" alt="" />
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
        HTML5, CSS3, vanila JS, React-Charts etc.
      </h5>
      <h5 className="text-left mt-9 font-bold">
        <span className="text-xl text-green-600 font-bold">
          Project Details:{" "}
        </span>
        This site details good smell perfume web.This contain us react
        chart/graph (like - pie chart etc).
      </h5>
      <h2 className="text-xl text-green-600 font-bold mt-7">Featuers:</h2>
      <div className="ml-10">
        <li>This site is good perfume based website.</li>
        <li>5 types react charts available.</li>
        <li>Clients her comments and reviews added.</li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open("https://the-perfume-reviews-site.netlify.app")
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
              "https://github.com/AhsanMustafa665/the-perfume-analysis",
              "_blank"
            )
          }
          class="btn rounded-full resume-btn mr-5"
        >
          <span className="text-xl">
            <img className="w-7 h-7 mr-1" src={git} alt="" />
          </span>{" "}
          CLIENT GIT
        </button>
      </div>
    </div>
  );
};

export default Details4;
