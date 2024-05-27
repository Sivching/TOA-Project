import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const OurInformation = () => {
  return (
    <div className="h-[100vh] mt-20">
      <div className=" w-[90%] xl:w-[80%]  mx-auto ">
        <h1 className="text-3xl xl:text-4xl font-bold text-center">
          Our Information
        </h1>
        <div className=" mx-auto my-20 text-center text-gray-200 px-20 mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-3  ">
          <div>
            <div className="flex justify-center ">
              <FaLocationDot className="w-16 h-16 xl:w-20 xl:h-20 p-4 text-white rounded-full  bg-sky-800" />
            </div>
            <p className="font-bold text-xl mt-5 text-black ">
              Phum Anglong Kngan, Sangkat Khmounh, Khan Sen Sok, Phnom Penh,
              Cambodia.
            </p>
          </div>
          <div>
            <div className="flex justify-center ">
              <IoMdMail className="w-16 h-16 xl:w-20 xl:h-20  p-4 text-white rounded-full bg-sky-800" />
            </div>
            <p className="mt-5  font-bold text-xl text-black ">
              yisivching@gmail.com
            </p>
          </div>
          <div>
            <div className="flex justify-center ">
              <IoCallSharp className="w-16 h-16 xl:w-20 xl:h-20 p-4  text-white rounded-full bg-sky-800" />
            </div>
            <p className="mt-5 text-xl  font-bold text-black">
              Phone Number: (+855) 069 859 846
            </p>
          </div>
        </div>
      </div>
      <form action="https://getform.io/f/rbeqrmkb" method="POST">
        <div className="mt-10 lg:mt-16 mx-auto">
          <h1 className="text-3xl text-black  xl:text-4xl font-bold text-center">
            Submit Your Information
          </h1>
          <div className="w-[90%] xl:w-[80%] mx-auto lg:grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <div className="mt-10">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-[100%] py-2 xl:py-3 xl:pr-60  lg:py-3 lg:pr-60 px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
            <div className="mt-5 md:mt-7">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="w-[100%] py-2 lg:mt-3  xl:py-3 xl:pr-60 lg:py-3 lg:pr-60  px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
            <div className="mt-5 md:mt-7">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-[100%] py-2 xl:py-3 xl:pr-60 lg:py-3 lg:pr-60  xl:mt-3 px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-7 flex justify-center ">
            <textarea
              placeholder="Description"
              name="description"
              className="w-[90%] xl:w-[80%] pb-60 px-4  py-2  text-sm md:text-lg rounded-lg border border-sky-400"
            />
          </div>
          <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between">
            <div></div>
            <button
              type="submit"
              className="mt-7 py-3 px-5 font-bold md:py-4 md:px-7 text-md rounded-md bg-blue-900 text-white  hover:bg-blue-700 transition-all ease-in-out duration-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OurInformation;
