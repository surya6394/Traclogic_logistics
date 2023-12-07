import React from "react";
import OffWhite from "../assets/OffWhite.png";
import OffWhiteImg from "../assets/OffWhite.png";
import LTImg from "../assets/L&T.png";
import LTImg2 from "../assets/L&T.png";

const logos = [OffWhite, LTImg, OffWhiteImg, LTImg2];

function PartnerSection() {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 bg-black px-72 py-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center">
              <img src={logo} alt="" className="w-40" />
            </div>
          ))}
        </div>
        {/* Why */}
        <div className="bg-gray-100 py-44">
          <h1 className="text-9xl font-semibold text-gray-900 text-center">WHY <br/>CHOOSE US</h1>
        </div>
      </section>
    </>
  );
}

export default PartnerSection;
