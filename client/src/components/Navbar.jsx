import React, { useContext } from "react";
import { useState } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { toast } from "react-toastify";

const Navbar = () => {
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    // toast.success("Logout successfully!!")
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between z-5 py-5 font-medium">
      <Link to={"/"}>
        {" "}
        <img src={assets.logo} className="w-32" alt="" />{" "}
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to={"/"}
          className="group flex flex-col gap-1 items-center font-cinzel transition-transform duration-300"
        >
          <p className="group-hover:scale-110 transition-transform duration-300">
            HOME
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300 group-hover:w-3/4" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="group flex flex-col gap-1 items-center font-cinzel transition-transform duration-300"
        >
          <p className="group-hover:scale-110 transition-transform duration-300">
            COLLECTIONS
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300 group-hover:w-3/4" />
        </NavLink>
        <NavLink
          to={"/about"}
          className="group flex flex-col gap-1 items-center font-cinzel transition-transform duration-300"
        >
          <p className="group-hover:scale-110 transition-transform duration-300">
            ABOUT
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700  hidden transition-all duration-300 group-hover:w-3/4" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className="group flex flex-col gap-1 items-center font-cinzel transition-transform duration-300"
        >
          <p className="group-hover:scale-110 transition-transform duration-300">
            CONTACT
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300 group-hover:w-3/4" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        {/* search icon */}
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer transition-transform duration-300 hover:scale-110"
          alt="search icon"
          onClick={() => setShowSearch(true)}
        />
        {/* profile icon */}
        <div className="group realtive">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer transition-transform duration-300 hover:scale-110"
            alt="profile-info"
          />
          {/* dropdown */}
          {token && (
            <div className="group-hover:block group-hover:z-50 hidden absolute dropdown-menu right-0 pt-4 md:pr-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-3 bg-[#faf5d8] text-gray-500 rounded ">
                <p className="cursor-pointer font-prata hover:text-black">
                  Profile
                </p>
                <p onClick={()=> navigate('/orders')} className="cursor-pointer font-prata hover:text-black">
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer font-prata hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* cart icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 "
            alt="cart icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]  ">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          className="cursor-pointer block w-5 sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>
      {/* side bar menu div for small screen */}
      <div
        className={`absolute top-0 bottom-0  right-0 overflow-hidden bg-amber-50 transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        } z-50 `}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 "
              alt=""
            />{" "}
            <p className="font-prata text-black ">Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            to={"/"}
            className="group flex flex-col font-prata gap-1 py-2 pl-6  transition-transform duration-300 hover:bg-[#fcf8de]"
          >
            HOME
            <hr className="w-[10%] border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/collection"}
            className="group flex flex-col gap-1 font-prata py-2 pl-6  transition-transform duration-300 hover:bg-[#fcf8de]"
          >
            COLLECTIONS
            <hr className="w-[10%] border-none  h-[1.5px] bg-gray-700 hidden transition-all duration-300 " />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/about"}
            className="group flex flex-col gap-1 font-prata py-2 pl-6  transition-transform duration-300 hover:bg-[#fcf8de]"
          >
            ABOUT
            <hr className="w-[10%] border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300 " />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/contact"}
            className="group flex flex-col gap-1 font-prata py-2 pl-6  transition-transform duration-300 hover:bg-[#fcf8de]"
          >
            CONTACT
            <hr className="w-[10%] border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300  " />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
