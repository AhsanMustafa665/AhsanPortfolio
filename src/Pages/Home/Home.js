import React from "react";
import me from "../../assets/images/photostudio-3-designify.png";
import giticon from "../../assets/icons/github.png";
import linkedinicon from "../../assets/icons/linkedin.png";
import facebookicon from "../../assets/icons/facebook.jpg";
import whatsupicon from "../../assets/icons/whatsup.png";
import phoneicon from "../../assets/icons/phone.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={me}
            style={{
              width: "60vh",
              border: "2px solid green",
              borderRadius: "50%",
              boxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
              webkitBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
              mozBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
            }}
            alt=""
          />
          <div>
            <h1
              class="text-6xl font-bold text-green-600 mt-6"
              style={{ fontFamily: "sans-serif" }}
            >
              Hello!
            </h1>
            <h2 class="py-6 text-xl " style={{ fontFamily: "sans-serif" }}>
              I'm{" "}
              <span className="text-emerald-600 text-2xl">Ahsan Mustafa.</span>
              I'm a Jr. Front-End Developer (React JS) from Chattogram,
              Bangladesh. I am fresher in web development. I love to hear from
              you about your unique needs.
            </h2>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/144mus6sDS7nDLqOkouRB3T-QVkvWDN6h/view?usp=sharing",
                  "_blank"
                )
              }
              style={{
                fontSize: "19px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              class="resume-btn py-3 px-6"
            >
              GET RESUME ➜
            </button>
            <div
              class="card mt-16 w-96 bg-base-100 shadow-xl"
              style={{
                boxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
                webkitBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
                mozBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
              }}
            >
              <div class="card-body">
                <button class="btn btn-primary resume-btn">
                  Contact with me
                </button>
                <button class="btn btn-primary resume-btn mb-5">Hire me</button>
                <div class="card-actions justify-end">
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
                  <button
                    className="hoverstyle"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=+8801310075966",
                        "_blank"
                      )
                    }
                  >
                    <img
                      src={whatsupicon}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
<button onClick={() => window.open("https://github.com/sunywebdev", "_blank")}>
  <img src={giticon} alt="" />
</button>;
