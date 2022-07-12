import React from "react";
import manu1 from "../../assets/Portfolio images/Manufac/manufac1.png";
import manu2 from "../../assets/Portfolio images/Manufac/manufac2.png";
import manu3 from "../../assets/Portfolio images/Manufac/manufac3.png";
import manu4 from "../../assets/Portfolio images/Manufac/manufac4.png";
import manu5 from "../../assets/Portfolio images/Manufac/manufac5.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details1 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        Manufacture (tools & kits) website
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={manu1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={manu2} class="w-96" alt="" />
        </div>
        <div id="item3" class="carousel-item w-full grid justify-items-center">
          <img src={manu3} class="w-96" alt="" />
        </div>
        <div id="item4" class="carousel-item w-full grid justify-items-center">
          <img src={manu4} class="w-96" alt="" />
        </div>
        <div id="item5" class="carousel-item w-full grid  justify-items-center">
          <img src={manu5} class="w-96" alt="" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2  gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
        <a href="#item5" class="btn btn-xs">
          5
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
          This website is MERN Stack single page React web application with a
          dashboard, where users can Buy Products, Read Blogs, Manage
          Orders,Reviews etc
        </li>
        <li>
          This web app also provides an Admin page where the admin can Manage
          All Users, Manage Users Reviews, Manage Users Orders, Add Products
          etc.
        </li>
        <li>Tools collections available.</li>
        <li>Users are also allowed to login and sign up.</li>
        <li>There is also validation.</li>
        <li>Users can access through of social networks (Google).</li>
        <li>
          Website uses on subscriber,follower,likes ultimately business summary
          added.
        </li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open("https://manufacture-web.firebaseapp.com/", "_blank")
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
              "https://github.com/AhsanMustafa665/manufacture-web-bd-clients",
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
        <button
          onClick={() =>
            window.open(
              "https://github.com/AhsanMustafa665/manufacture-web-bd-server",
              "_blank"
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

export default Details1;
