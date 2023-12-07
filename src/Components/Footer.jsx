import React from "react";
import logo from "../images/TRACALOGIC.png";
import { Link } from "react-router-dom";
import googlePlay from "../images/google-play-btn2.jpg";
import appStore from "../images/app-store-btn2.jpg";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

function Footer () {
  const phoneNumber = "+91-9894596596";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <section className="bg-black1 px-16 py-16">
        <div className="grid grid-flow-row-dense grid-cols-9 justify-center">
          {/* first col */}
          <div className="col-span-2">
            <div>
              <Link to="/">
                <img src={logo} alt="" className="w-56 mb-7" />
              </Link>
              <p className="text-md text-gray-300 pb-3">
                Welcome to Tracalogic We create high quality 
                products that will make your life better.
              </p>
              <p className="text-md text-gray-300">
                Tracalogic Pvt. Ltd., reckon requirement of Smarter, 
                Innovative and Aordable Solutions....etc
              </p>
              <button className="text-teal1 font-bold mt-10">
                Read more <FaArrowRight className=" float-right mt-2 ml-1 " />
              </button>

              <div className="flex gap-4 mt-8">
                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-100"
                  onMouseOver={({ target }) => (target.style.color = "#0984e3")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                >
                  <FaFacebookF size={20} />
                </Link>

                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-100"
                  onMouseOver={({ target }) => (target.style.color = "#F601C6")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                >
                  <FaInstagram size={20} />
                </Link>

                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-100"
                  onMouseOver={({ target }) => (target.style.color = "#3498db")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                >
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="col-span-2 pl-20">
            <h1 className="text-gray-200 text-lg font-semibold pb-6">
              More Links{" "}
            </h1>
            <ul className="flex flex-col space-y-2 text-gray-300">
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">How it works</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
              <li>
                <Link to="/">Terms of use</Link>
              </li>
            </ul>
          </div>
          {/* third col */}
          <div className="col-span-2 -ml-6">
            <h1 className="text-gray-200 text-lg font-semibold pb-6">
              Services{" "}
            </h1>
            <ul className="flex flex-col space-y-2 text-gray-300">
              <li>
                <Link to="/">Student Tracking System</Link>
              </li>
              <li>
                <Link to="/">Long Range RFID Solutions</Link>
              </li>
              <li>
                <Link to="/">Smart City Solutions</Link>
              </li>
              <li>
                <Link to="/">GPS Tracker for Business Personnel</Link>
              </li>
              <li>
                <Link to="/">personal GPS Tracker</Link>
              </li>
              <li>
                <Link to="/">Integrated Command Control Center</Link>
              </li>
            </ul>
          </div> 
          {/* last col */}
          <div className="col-span-3 ">
            <div>
              <h1 className="text-gray-200 text-lg font-semibold pb-6">
                Contact us
              </h1>
              <address className="text-md text-gray-300">
                9, Velachery Main Rd, Gandhi Nagar, <br />
                Mahalakshmi, Selaiyur, Chennai, <br />
                Tamil Nadu 600073.
              </address>

              <p
                className="text-md text-gray-300 mt-4 underline underline-offset-4 "
                onClick={handlePhoneNumberClick}
              >
                {phoneNumber}
              </p>
            </div>
            <div className="text-md text-gray-300 mt-3">
              <a>support@tracalogic.com</a>
            </div>
            <div className=" flex flex-col mt-24">
              <div className="flex mb-6">
                <img src={googlePlay} alt="" className="w-32 " />
                <h1 className="text-gray-200 text-lg font-semibold pl-4">
                  Download the Tracalogic Now!
                </h1>
              </div>
              <div>
                <div>
                  <img src={appStore} alt="" className="w-32" />
                </div>
                <div className="pl-36 -mt-16 ">
                  <p className="text-md text-gray-300 pr-6">
                    Focus on superior performance to ensure a greatreturn on
                    
                    investment to the customer. Excellence in customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last footer */}

      <section className="bg-black1">
      <hr className="bottom-1 border-gray-600" />
        <div className="grid grid-cols-2 px-16 py-6">
          <div>
            <div className=" text-md text-gray-300">
              <p className="">
                Copyrights © 2020. All rights reserved
                <br />
                by{" "}
                <span className="text-white font-semibold">
                  AmigaIt Technologies
                </span>
              </p>
            </div>
          </div>
          <div>
            <input type="email" placeholder="Enter your email" className="ring-0 bg-stone-900 text-gray-300 outline-none focus:ring-2 focus:ring-slate-800 pl-5 pr-60 py-2 ml-64 relative z-0 mt-2"/>
            <Link
             to="/"
             target="_blank"
             className="text-gray-300 float-right absolute z-1 -ml-12 pt-4"
            >
            <FaTelegramPlane size={28} className=""/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
