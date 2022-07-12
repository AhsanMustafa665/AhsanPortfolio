import React from "react";
import portfolio1 from "../../assets/Portfolio images/portfolio1.png";
import portfolio2 from "../../assets/Portfolio images/portfolio2.png";
import portfolio3 from "../../assets/Portfolio images/portfolio3.png";
import portfolio4 from "../../assets/Portfolio images/portfolio4.png";
import collage from "../../assets/Portfolio images/collage.png";
import portfolio6 from "../../assets/Portfolio images/portfolio6.png";
import global from "../../assets/icons/global.png";
import i from "../../assets/icons/i icon.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="my-10 text-green-600 text-center text-5xl uppercase font-bold ">
        Portfolio
        <span className="text-xl text-black">
          <h2>Check out some of my works.</h2>
        </span>
      </h1>
      <div className="fd-containers">
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10 ">
            <img src={portfolio2} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-green-600 font-bold">
              Manufacture's tools & kit
            </h2>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Technology used:{" "}
              </span>
              HTML5, CSS3, React JS, Node JS, MongoDB, etc.
            </h5>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Project details:{" "}
              </span>
              This site details computer manufacturing web. Tools collections
              available. Some regular client her comments and ratings showins
              this website...
            </h5>
            <div class="card-actions mt-5">
              <button
                onClick={() =>
                  window.open(
                    "https://manufacture-web.firebaseapp.com/",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-7 h-7 mr-1" src={global} alt="" />
                </span>{" "}
                Live
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://ahsanmostafaportfolio.netlify.app/details1",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-6 h-6 mr-2" src={i} alt="" />
                </span>{" "}
                Details
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10">
            <img src={portfolio3} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-green-600 font-bold">The genius car</h2>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Technology used:{" "}
              </span>
              HTML5, CSS3, React JS, Node JS, MongoDB, etc.
            </h5>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Project details:{" "}
              </span>
              This site details car enginners special. Tools collections
              available. Some regular client her car recheck this website.
            </h5>
            <div class="card-actions mt-16 ">
              <button
                onClick={() =>
                  window.open(
                    "https://shimmering-strudel-ad8215.netlify.app",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-7 h-7 mr-1" src={global} alt="" />
                </span>{" "}
                Live
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://ahsanmostafaportfolio.netlify.app/details2",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-6 h-6 mr-2" src={i} alt="" />
                </span>{" "}
                Details
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10">
            <img src={portfolio4} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-green-600 font-bold">
              Covid-19 mask choice me
            </h2>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Technology used:{" "}
              </span>
              HTML5, CSS3, Javascript, DOM etc.
            </h5>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Project details:{" "}
              </span>
              This site is Covid-19 special mask choice. Some fun mask chocie on
              this website...
            </h5>
            <div class="card-actions mt-20">
              <button
                onClick={() =>
                  window.open(
                    "https://covid-19-special-musk-project.netlify.app",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-7 h-7 mr-1" src={global} alt="" />
                </span>{" "}
                Live
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://ahsanmostafaportfolio.netlify.app/details3",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-6 h-6 mr-2" src={i} alt="" />
                </span>{" "}
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fd-containers">
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10">
            <img src={collage} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-green-600 font-bold">
              The Perfume analysis web
            </h2>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Technology used:{" "}
              </span>
              HTML5, CSS3, React JS, React Chart.
            </h5>
            <h5 className="text-left">
              <span className="text-lg text-green-600 font-bold">
                Project details:{" "}
              </span>
              The website is good smell perfume choice on client
              website.Customer feedback is valuable.So, some customer we there
              are feedbacks...
            </h5>
            <div class="card-actions mt-52">
              <button
                onClick={() =>
                  window.open(
                    "https://the-perfume-reviews-site.netlify.app",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-7 h-7 mr-1" src={global} alt="" />
                </span>{" "}
                Live
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://ahsanmostafaportfolio.netlify.app/details4",
                    "_blank"
                  )
                }
                class="btn rounded-full resume-btn"
              >
                <span className="text-xl">
                  <img className="w-6 h-6 mr-2" src={i} alt="" />
                </span>{" "}
                Details
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10">
            <img src={portfolio1} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <h2 class="card-title text-green-600 font-bold ml-28 mt-7 mb-4">
            Doctors portal
          </h2>
          <h5 className="text-left px-8">
            <span className="text-lg text-green-600 font-bold ">
              Technology used:{" "}
            </span>
            HTML5, CSS3, React JS, Firebase, Node JS, MongoDB, etc.
          </h5>
          <h5 className="text-left px-8">
            <span className="text-lg text-green-600 font-bold">
              Project details:{" "}
            </span>
            This site details the profession of a doctor. What is the service he
            is providing, what is he studying, qualifications, what is his
            exchange fee? It has details...
          </h5>
          <div class="card-actions  mt-56 ml-16">
            <button
              onClick={() =>
                window.open("https://doctors-website-131c4.web.app/", "_blank")
              }
              class="btn rounded-full resume-btn"
            >
              <span className="text-xl">
                <img className="w-7 h-7 mr-1" src={global} alt="" />
              </span>{" "}
              Live
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://ahsanmostafaportfolio.netlify.app/details5",
                  "_blank"
                )
              }
              class="btn rounded-full resume-btn mb-6"
            >
              <span className="text-xl">
                <img className="w-6 h-6 mr-2" src={i} alt="" />
              </span>{" "}
              Details
            </button>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl borders">
          <figure class="px-10 pt-10">
            <img src={portfolio6} alt="Shoes" class="rounded-xl borders" />
          </figure>
          <h2 class="card-title text-green-600  font-bold ml-16 mt-7 mb-4">
            The furnitures warehouse
          </h2>
          <h5 className="text-left px-8">
            <span className="text-lg text-green-600 font-bold ">
              Technology used:{" "}
            </span>
            HTML5, CSS3, React JS, Firebase, Node JS, MongoDB, etc.
          </h5>
          <h5 className="text-left px-8">
            <span className="text-lg text-green-600 font-bold">
              Project details:{" "}
            </span>
            This site details the Inventory/Warehouse special website. Furniture
            college useable.Users are also allowed to login and sign
            up.Furniture features,leatest blogs is showins this website.
          </h5>
          <div class="card-actions mt-52 ml-16 ">
            <button
              onClick={() =>
                window.open(
                  "https://warehouse-website-60530.firebaseapp.com/",
                  "_blank"
                )
              }
              class="btn rounded-full resume-btn"
            >
              <span className="text-xl">
                <img className="w-7 h-7 mr-1" src={global} alt="" />
              </span>{" "}
              Live
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://ahsanmostafaportfolio.netlify.app/details6",
                  "_blank"
                )
              }
              class="btn rounded-full resume-btn mb-6"
            >
              <span className="text-xl">
                <img className="w-6 h-6 mr-2" src={i} alt="" />
              </span>{" "}
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
