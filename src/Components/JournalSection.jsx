import React from "react";
import image from "../images/journal.png";
import { FaArrowRight } from "react-icons/fa";

function JournalSection() {
  return (
    <>
      <div>
        <div className="px-16 pt-16">
          <h1 className="text-4xl font-bold text-center mb-4 ">
            Read Updated Journal
          </h1>
          <p className="text-lg text-center text-gray-700">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,{" "}
            <br />
            consectetur, adipisci velit..
          </p>
        </div>
        <div className="pt-20"></div>
      </div>

      {/* card product */}
      <div className="flex pb-36 pl-20">
        <div className="grid grid-cols-6 ">
          {/* first card */}
          <div className="col-span-2 relative">
            <div className="">
              <img src={image} alt="" className="  w-1/2" />
            </div>
            <div class="max-w-xs px-6 py-4 bg-white   absolute -bottom-14 left-32 ">
              <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Latest News . December 12, 2022
              </p>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Lorem Ipsum is simply <br />
                  dummy text of the <br />
                  printing
                </h5>
              <hr className="bottom-2 border-gray-400 w-64 mt-16"/>
              <button className="text-teal1 font-bold mt-4">
                Read more <FaArrowRight className=" float-right mt-2 ml-2 " />
              </button>
            </div>
          </div>

          {/* second card */}
          <div className="col-span-2 relative">
            <div>
              <img src={image} alt="" className="  w-1/2" />
            </div>
            <div className="max-w-xs px-6 py-4 bg-white absolute -bottom-14 left-32">
              <p className="mb-3 font-semibold text-gray-700 ">Latest News . December 12, 2022</p>
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Lorem Ipsum is simply <br />
                dummy text of the <br />
                printing
              </h4>
              <hr className="bottom-2 border-gray-400 w-64 mt-16"/>
              <button className="text-teal1 font-bold mt-4">
                Read more <FaArrowRight className=" float-right mt-2 ml-2 " />
              </button>
            </div>
          </div>
          {/* last card */}
          <div className="col-span-2 relative">
            <div>
              <img src={image} alt="" className=" w-1/2" />
            </div>
            <div className="max-w-xs px-6 py-4 bg-white absolute -bottom-14 left-32">
              <p className="mb-3 font-semibold text-gray-700 ">Latest News . December 12, 2022</p>
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Lorem Ipsum is simply <br />
                dummy text of the <br />
                printing
              </h4>
              <hr className="bottom-2 border-gray-400 w-64 mt-16"/>
              <button className="text-teal1 font-bold mt-4">
                Read more <FaArrowRight className=" float-right mt-2 ml-2 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JournalSection;
