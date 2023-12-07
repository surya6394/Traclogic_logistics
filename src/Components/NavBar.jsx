import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/TRACALOGIC.png";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

function NavBar() {
  let Links = [
    {name: "Products", link: "/product"},
    {name: "Solution", link: "/solution"},
    {name: "Services", link: "/services"},
    {name: "Track", link: "/track"},
    {name: "Shop", link: "/shop"},
    {name: "Contact", link: "/contact"},
  ];
  
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sticky top-0 bg-white z-10 w-full left-0">
        <nav className="md:flex justify-between py-6 px-16 items-center">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} className="lg:w-44 md:w-44 w-44" />
            </Link>
          </div>

          {/* responsive menu */}
          <div className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden">
            {open ? (
          <AiOutlineCloseCircle onClick={toggleMenu}/>) : (
          <AiOutlineMenu onClick={toggleMenu}/>)}
          </div>
          {/* end */}

          <ul className="md:flex md:items-center gap-10 font-bold md:pb-0">
              {
                Links.map((list) => (
                  <li className="md:my-0 my-6">
                    <a href={list.link} className="hover:text-teal-500 duration-500">{list.name}</a>
                  </li>
                ))
              }
            </ul>

          <div className={`md:flex md:items-center gap-10 font-bold md:pb-0 md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all ease-in top-${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 `}>
            {/* <ul className="md:flex md:items-center gap-10 font-bold md:pb-0">
              {
                Links.map((list) => (
                  <li className="md:my-0 my-6">
                    <a href={list.link} className="hover:text-teal-500 duration-500">{list.name}</a>
                  </li>
                ))
              } */}
              {/* <li>
                <Link to="/product" >
                Products
                </Link>
              </li>
              <li>
                <Link to="/solution" >
                Solution
                </Link>
              </li>
              <li>
                <Link to="/services" >
                Services
                </Link>
              </li>
              <li>
                <Link to="/track" >
                Track
                </Link>
              </li>
              <li>
                <Link to="/shop" >
                Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" >
                Contact
                </Link>
              </li> */}
            {/* </ul> */}
            
          </div>
          <div className="md:flex gap-8 md:justify-center md:items-center ">
            <div className="md:mb-0 mb-7">
              <Link to="/" className="font-bold">
              Log In
              </Link>
            </div>
            <Button>Sign Up</Button>

            {/* <div>
              <button className="ring-2 ring-teal1 outline-none bg-teal1 text-white font-bold rounded-full px-6 py-1">Sign Up</button>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
