import React, { useState } from 'react';
import cardData from './CardData';
import { FaArrowRight } from 'react-icons/fa';

function ProductSection() {
  return (
    <>
     <div>
      <div className="px-16 py-20">
        <h1 className="text-4xl font-bold text-center mb-4 ">Our Products</h1>
        <p className="text-lg text-center text-gray-700">Lorem Ipsum is simply dummy text of the printing</p>

        <div className="grid grid-cols-4 gap-9 mx-28 mt-16 px-2">
          {cardData.map((data, index) => (
            <Card 
            key={index}
            image={data.img}
            title={data.title}
            text={data.text}
            />
          ))}
        </div>
      </div>
     </div>
    </>
  );
};

const Card = ({ image, title, text }) => {
  const [moreData, setMoreData] = useState(false);

  let shortData = `${text.slice(0, 40)}..`;
  const learnMore = () => {
    setMoreData(!moreData)
  };

  return (
    <>
     <div>
      <div className="ring-2 ring-gray-200">
        <div className="flex ml-40 pt-10">
        <button className="ring-1 rounded-full px-2 py-1 text-xs font-semibold ring-pink1 bg-pink1 text-white">Technology</button>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="" />
        </div>
        <div className="space-y-3 pl-4">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="text-sm font-semibold text-gray-700">{moreData ? text : shortData}</p>
          <button className="pt-4 pb-6 font-bold" onClick={learnMore}>{moreData ? "Hide" : "Read More"}<FaArrowRight className="float-right mt-2 ml-2 text-teal1"/></button>
        </div>
      </div>
     </div>
    </>
  )
}

export default ProductSection;