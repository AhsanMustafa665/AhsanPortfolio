import React from "react";
import giticon from "../assets/icons/github.png";
import linkedinicon from "../assets/icons/linkedin.png";
import facebookicon from "../assets/icons/facebook.jpg";
import phoneicon from "../assets/icons/phone.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h1
              class="text-6xl font-bold text-green-600 mt-16 uppercase"
              style={{ fontFamily: "sans-serif" }}
            >
              Contact
            </h1>
            <h4>
              Do you speak Alien Language? It's ok if you don't, I speak English
              too.
            </h4>
          </div>
          <div className="content ml-5 md:ml-0 d_flex">
            <div className="left">
              <div className="box flex items-center flex-col">
                <div className="details">
                  <h1 style={{ fontFamily: "sans-serif" }}>
                    Ahsan Mustafa
                    <span className="text-base">
                      <h2>Jr. Front End Developer</h2>
                    </span>
                  </h1>

                  <div class="">
                    <button
                      className="hovergit"
                      onClick={() =>
                        window.open(
                          "https://github.com/AhsanMustafa665",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={giticon}
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                      />
                    </button>
                    <button
                      className="hoverstyle"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/ahsanfaisal/",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={linkedinicon}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                    </button>
                    <button
                      className="hoverstyle"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/md.ahsanmustafa.3",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={facebookicon}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                    </button>
                    <button
                      className="hoverstyle"
                      onClick={() =>
                        window.open("tel:01310075966", "_blank", "_blank")
                      }
                    >
                      <img
                        src={phoneicon}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="w-max-full mb-5 md:ml-16 lg:w-full max-w-xl bg-white p-5 rounded-2xl h-1/3"
              action="https://formspree.io/f/xknykqzy"
              method="POST"
            >
              <div className="flex flex-wrap mb-5">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-green-700 pl-4 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Your Full Name*"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2">
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-green-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address*"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold -mt-4 mb-2">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full text-gray-700 border border-green-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    name="message"
                    placeholder="Enter Your Inquiry"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    type="submit"
                    style={{
                      fontSize: "19px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      fontFamily: "sans-serif",
                    }}
                    class="resume-btn py-3 px-6 uppercase"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Send&nbsp;Message
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
