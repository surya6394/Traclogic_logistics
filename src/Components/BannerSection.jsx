import React from "react";
import Button from "./Button";


function BannerSection() {
  return (
    <>
      <section className="items-center">
        <div className="flex bg-banner-img items-center bg-no-repeat bg-right bg-cover px-16 pt-56 pb-52 ">
          <div className="gap-6">
            <div className="px-4">
              <h1 className="text-4xl font-bold leading-tight">
                EVERYTHING <br />
                YOU NEEDED IN
                <br /> <span className="text-teal1">TRACKING</span>
              </h1>
              <h2 className="text-lg font-semibold mt-6 text-gray-600 shadow-gray-800-700">
                EFFICIENTLY MANAGE YOUR FLEET, ANYWHERE, ANYTIME
              </h2>
            </div>
            <div className="pt-12 px-4">
              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="ring-1 ring-gray-200 bg-gray-200 text-sm rounded-full focus:ring-2 focus:ring-gray-400 outline-none pl-5 pr-40 py-2"
                />
                {/* use props from ( Button.js ) */}
                <span className="-ml-6">
                <Button>Get Access</Button>
                </span>
                {/* end props */}
                {/* <button className="ring-2 ring-teal1 outline-none bg-teal1 text-white font-bold rounded-full px-6 py-1.5 -ml-6">
                  Get Access
                </button> */}
              </form>
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* progres section */}
        <hr className="text-gray-500 h-3 shadow-inner" />
        <div className="py-6">
          <div className=" bg-white rounded-lg">
            <dl className="grid max-w-screen-xl  mx-auto sm:grid-cols-2 xl:grid-cols-4 space-y-4">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">
                  <span className="text-teal-500">150+</span>
                </dt>
                <dd className="text-gray-800 text-md">Charging Station</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">
                  <span className="text-teal1">120+</span>
                </dt>
                <dd className="text-gray-800 text-md">Active User</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">
                  <span className="text-teal1">20+</span>
                </dt>
                <dd className="text-gray-800 text-md ">
                  Partner Collaboration
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">
                  <span className="text-teal1">30+</span>
                </dt>
                <dd className="text-gray-800 text-md ">Regions</dd>
              </div>
            </dl>
          </div>
        </div>
        {/* end progres section */}

        {/* third section */}
        <div className="bg-black">
          <div className="grid grid-cols-2 px-20 py-28 text-white items-center">
            <h1 className="text-6xl font-semibold leading-tight">Connecting your <br/>fleet from first mile <br/>to the last...</h1>
            <p className="text-md text-gray-500 pl-14 ">Fleet industry is in a transition mode and is rapidly changing.<br/>Constantly emerging technologies and trends are reshaping the <br/>fleet industry in all aspects. Cost reduction and risk management <br/>are the primary objectives of every fleet management company.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
