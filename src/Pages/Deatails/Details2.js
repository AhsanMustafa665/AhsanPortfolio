import React from "react";
import car1 from "../../assets/Portfolio images/Car/car1.png";
import car2 from "../../assets/Portfolio images/Car/car2.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details2 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        The Genius car service
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={car1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={car2} class="w-96" alt="" />
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
        This site details car servicing web. Tools collections available. Client
        this website access at first signup/login...
      </h5>
      <h2 className="text-xl text-green-600 font-bold mt-7">Featuers:</h2>
      <div className="ml-10">
        <li>
          This website is MERN Stack single page React web application where
          users can Buy Servicing enginners, Read Blogs, Manage Orders etc
        </li>

        <li>Expert collections available.</li>
        <li>Users are also allowed to login and sign up.</li>
        <li>There is also validation.</li>
        <li>Users can access through of social networks (Google/Facebook).</li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open(
              "https://shimmering-strudel-ad8215.netlify.app",
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
              "https://github.com/AhsanMustafa665/genius-car-services",
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

export default Details2;
