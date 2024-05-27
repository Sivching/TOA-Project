import React from "react";
import image1 from "../../assets/image/1.jpg";
import image2 from "../../assets/image/2.jpg";
import image3 from "../../assets/image/3.jpg";
import image4 from "../../assets/image/4.jpg";
import image5 from "../../assets/image/5.jpg";
import image6 from "../../assets/image/6.jpg";
import image7 from "../../assets/image/7.jpg";
import image8 from "../../assets/image/8.jpg";
import image9 from "../../assets/image/9.jpg";
import image10 from "../../assets/image/10.jpg";
import image11 from "../../assets/image/11.jpg";
import image12 from "../../assets/image/12.jpg";
import image13 from "../../assets/image/13.jpg";
import image14 from "../../assets/image/14.jpg";
import image15 from "../../assets/image/15.jpg";
import image16 from "../../assets/image/16.jpg";
import image17 from "../../assets/image/17.jpg";
import image18 from "../../assets/image/18.jpg";
import image19 from "../../assets/image/19.jpg";
import image20 from "../../assets/image/20.jpg";
const products = [
  {
    img: image1,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image2,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image3,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image4,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image5,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image6,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image7,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image8,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image9,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image10,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image11,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image12,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image13,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image14,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image15,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image16,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image17,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image18,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image19,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
  {
    img: image20,
    code: "Code:",
    text: "Interior",
    detail: "SUPERSHIELD DURACLEAN MATT",
  },
];

import { FaCartPlus } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const Product = () => {
  return (
    <div className=" xl:w-[70%]  mx-auto md:w-[80%] px-5">
      <div>
        <h1 className="text-3xl xl:text-4xl font-bold text-center mt-10 xl:mt-14">
          Our Products
        </h1>
        <div className="mx-2 mt-10 h-64 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center gap-3 xl:gap-4 relative">
          {products.map(({ img, code, text, detail }) => {
            return (
              <div className="relative group cursor-pointer my-3">
                <img
                  src={img}
                  className="w-72 rounded-lg group-hover:scale-105 transition-all ease-in-out duration-300"
                />
                <div className="flex flex-col gap-2 absolute right-0 top-2 opacity-0 group-hover:opacity-100 transition-all ease-in-out  duration-300">
                  <span className="bg-gray-300 text-xl p-1 rounded-md md:w-9 flex justify-center items-center">
                    <FaCartPlus />
                  </span>
                  <span className="bg-gray-300 text-xl p-1 rounded-md md:w-9 flex justify-center items-center">
                    <FaFacebookSquare />
                  </span>
                  <span className="bg-gray-300 text-xl p-1 rounded-md md:w-9 flex justify-center items-center">
                    <IoIosLink />
                  </span>
                </div>
                <h4 className="absolute right-2 bottom-[83px] lg:bottom-[66px] xl:bottom-[75px] text-sm xl:text-lg">
                  {code}
                </h4>
                <div className="p-3">
                  <span className="text-[11px] xl:text-lg">{text}</span>
                  <h2 className="text-[12px] xl:text-[14px] group-hover:text-red-500">
                    {detail}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
