import { Link } from "react-router-dom";
import Errorimage from "../assets/image/404_page_cover.jpg";

const ErrorPage = () => {
  return (
    <div className="w-[100%] h-[100vh] flex gap-7 flex-col justify-center items-center bg-slate-400 ">
      <img src={Errorimage} alt="ErrorImage" className="w-[50%] rounded-lg " />
      <Link
        to="/"
        className="text-[23px] text-white hover:bg-red-300  transition-all ease-in-out duration-500 flex justify-center items-center font-bold w-40 h-12 rounded-xl bg-red-500"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
