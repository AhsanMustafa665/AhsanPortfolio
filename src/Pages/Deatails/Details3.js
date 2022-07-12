import React from "react";
import mask1 from "../../assets/Portfolio images/Mask/mask1.png";
import mask2 from "../../assets/Portfolio images/Mask/mask2.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details3 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        Covid-19 chocie musk
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={mask1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={mask2} class="w-96" alt="" />
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
        <li>
          This website is Full Stack single page vanila Javascript web
          application.
        </li>
        <li>User can multiple mask choice and one choice this site :)</li>
        <li>Masks collections available.</li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open(
              "https://covid-19-special-musk-project.netlify.app",
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
              "https://github.com/AhsanMustafa665/lucky-one",
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

export default Details3;
