import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import GoToTop from "./GoToTop";
import { CiSearch } from "react-icons/ci";
import "./style.css";
const Header = () => {
  return (
    <div>
      <div className="header_container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="header_links">
            <li>
              <NavLink to="/" className="header_links_li ">
                Pets
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessories" className="header_links_li ">
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="header_links_li ">
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/components" className="header_links_li ">
                Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/brands" className="header_links_li ">
                Brands
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_input">
          <input type="search" placeholder="Search" />
          <CiSearch className="search" />
        </div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Header;
