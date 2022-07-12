import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/icons/home.png";
import laptop from "../assets/icons/laptop.png";
import webdetails from "../assets/icons/web-details.png";
import contact from "../assets/icons/contact.png";
import manufac from "../assets/icons/manufacfture.png";
import chair from "../assets/icons/chair.png";
import mask from "../assets/icons/mask.png";
import perfume from "../assets/icons/perfume.png";
import car from "../assets/icons/car.png";
import doctor from "../assets/icons/doctor.png";
import blog from "../assets/icons/blog.png";
import me from "../assets/icons/me.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div
        class="navbar bg-base-200"
        style={{
          boxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
          webkitBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
          mozBoxShadow: "7px 7px 12px 3px rgba(68,204,128,0.69)",
        }}
      >
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <NavLink className="mx-5 font-bold" to="home">
                  <img className="w-8 h-8" src={home} alt="" />
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="mx-5" to="portfolio">
                  <img className="w-8 h-8" src={laptop} alt="" />
                  Portfolio
                </NavLink>
              </li>
              <li tabindex="0">
                <a class="justify-between font-bold">
                  Details
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details1">
                      <img className="w-8 h-8" src={manufac} alt="" />
                      Details Manufacture
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details2">
                      <img className="w-8 h-8" src={car} alt="" />
                      Details Car Servicing
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details3">
                      <img className="w-8 h-8" src={mask} alt="" />
                      Details Masks Choice
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details4">
                      <img className="w-8 h-8" src={perfume} alt="" />
                      Details Perfume Analysis
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details5">
                      <img className="w-8 h-8" src={doctor} alt="" />
                      Details Doctor Site
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="mx-5 font-bold" to="details6">
                      <img className="w-8 h-8" src={chair} alt="" />
                      Details Inventory
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <NavLink className="mx-5" to="blog">
                  <img className="w-8 h-8" src={blog} alt="" />
                  Blogs
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="mx-5" to="about">
                  <img className="w-12 h-8" src={me} alt="" />
                  About me
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="mx-5" to="contact">
                  <img className="w-8 h-8" src={contact} alt="" />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            class="btn btn-ghost normal-case text-6xl"
            style={{ fontFamily: "cursive" }}
          >
            <span className="text-5xl">👨🏻‍💻</span> Ahsan
          </NavLink>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              {" "}
              <NavLink className="mx-5 font-bold" to="home">
                <img className="w-8 h-8" src={home} alt="" />
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="mx-5 font-bold" to="portfolio">
                <img className="w-8 h-8" src={laptop} alt="" />
                Portfolio
              </NavLink>
            </li>
            <li tabindex="0">
              <a className=" font-bold">
                <img className="w-8 h-8" src={webdetails} alt="" />
                Details
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details1">
                    <img className="w-8 h-8" src={manufac} alt="" />
                    Details Manufacture
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details2">
                    <img className="w-8 h-8" src={car} alt="" />
                    Details Car Servicing
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details3">
                    <img className="w-8 h-8" src={mask} alt="" />
                    Details Masks Choice
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details4">
                    <img className="w-8 h-8" src={perfume} alt="" />
                    Details Perfume Analysis
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details5">
                    <img className="w-8 h-8" src={doctor} alt="" />
                    Details Doctor Site
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="mx-5 font-bold" to="details6">
                    <img className="w-8 h-8" src={chair} alt="" />
                    Details Inventory
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <NavLink className="mx-5" to="blog">
                <img className="w-8 h-8" src={blog} alt="" />
                Blogs
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="mx-5 font-bold" to="about">
                <img className="w-12 h-8" src={me} alt="" />
                About me
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="mx-5 font-bold" to="contact">
                <img className="w-8 h-8" src={contact} alt="" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
