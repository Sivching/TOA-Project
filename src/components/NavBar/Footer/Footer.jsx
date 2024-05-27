import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-[100%] h-[105vh] xl:h-[45vh]  lg:h-[50vh] bg-blue-900 px-8 py-10 mt-[500px] lg:mt-[300px] xl:mt-[350px] text-white">
      <div className="xl:w-[70%] lg:gap-28  lg:w-[80%] mx-auto xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3">
        <div>
          <div>
            <h2 className="italic text-lg">LET'S COLOR YOUR LIFE</h2>
            <p className="text-gray-400 text-md mt-2">
              TOA Coating (Cambodia) Co.,Ltd
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-bold text-lg">Address</h2>
            <p className="text-gray-400 text-md mt-2 w-72">
              TOA Coating (Cambodia) Co.,Ltd Sales Office: The Point Community
              Mall No.#113c, Mao Tse Tung Blvd, Sangkat Toul Svay Prey, Khan
              Beong Keng Kong Phnom Penh, Cambodia
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-bold text-lg">Contact</h2>
            <p className="text-gray-400 text-md mt-2 w-72">
              Bussiness Center: 095 999 538
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="italic text-lg">Quick Link</h2>
          <ul>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Decoration Coating
              </a>
            </li>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Construction Chemicals
              </a>
            </li>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Special Paint
              </a>
            </li>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Wood Coating
              </a>
            </li>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Heavy Duty Coating
              </a>
            </li>
            <li className="mt-3 ">
              <a
                href=""
                className="text-gray-400 text-md hover:text-white  w-72"
              >
                Metal Coating
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h2 className="italic text-lg ">Follow us</h2>
          <div className="mt-3 flex gap-2">
            <a href="">
              <FaFacebook className="text-3xl border border-white rounded-full " />
            </a>
            <a href="">
              <FaYoutube className="text-3xl border border-white rounded-full " />
            </a>
            <a href="">
              <FaTelegram className="text-3xl border border-white rounded-full " />
            </a>
            <a href="">
              <FaInstagram className="text-3xl border border-white rounded-full " />
            </a>
            <a href="">
              <FaLocationDot className="text-3xl border border-white rounded-full " />
            </a>
          </div>
          <p className="text-[12px] mt-3 text-gray-400 xl:mt-40 lg:mt-40">
            © 2022 All Rights Reserved Designed by TOA Coating (Cambodia) Co.,
            Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
