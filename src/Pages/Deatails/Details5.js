import React from "react";
import doc1 from "../../assets/Portfolio images/Doctor/doc1.png";
import doc2 from "../../assets/Portfolio images/Doctor/doc2.png";
import doc3 from "../../assets/Portfolio images/Doctor/doc3.png";
import global from "../../assets/icons/global.png";
import git from "../../assets/icons/github.png";

const Details5 = () => {
  return (
    <div>
      <h2 className="mt-6 text-green-600 text-center text-3xl uppercase font-bold">
        Independent service provider (Doctor) web
      </h2>
      <div class="carousel mt-12">
        <div id="item1" class="carousel-item w-full grid justify-items-center">
          <img src={doc1} class="w-96" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full grid justify-items-center">
          <img src={doc2} class="w-96" alt="" />
        </div>
        <div id="item3" class="carousel-item w-full grid justify-items-center">
          <img src={doc3} class="w-96" alt="" />
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
      </div>
      <h5 className="text-left font-bold">
        <span className="text-xl text-green-600">Technologies Used: </span>
        HTML5, CSS3, React JS, Node JS, MongoDB, etc.
      </h5>
      <h5 className="text-left mt-9 font-bold">
        <span className="text-xl text-green-600 font-bold">
          Project Details:{" "}
        </span>
        This site details computer manufacturing web. Doctors multiple like -
        Proper-Microbiologist, Good prescription format,Eye-specialist, Best
        injection push available.
      </h5>
      <h2 className="text-xl text-green-600 font-bold mt-7">Featuers:</h2>
      <div className="ml-10">
        <li>This site details the profession of a doctor.</li>
        <li>
          What is the service he is providing, what is he studying,
          qualifications, what is his exchange fee? It has details.
        </li>
        <li>Patients are also allowed to login and sign up.</li>

        <li>There is also validation.</li>
        <li>Patients can access through of social networks (Google).</li>
      </div>
      <div className="mt-12 mb-8 mx-96">
        <button
          onClick={() =>
            window.open("https://doctors-website-131c4.web.app/", "_blank")
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
              "https://github.com/AhsanMustafa665/independent-service-provider-client",
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

export default Details5;
