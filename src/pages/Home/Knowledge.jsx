import knowledge1 from "../../assets/image/knowledge1.jpg";
import knowledge2 from "../../assets/image/knowledge2.jpg";
import knowledge3 from "../../assets/image/knowledge3.jpg";

const knowledges = [
  {
    img: knowledge1,
    text: "TOA COLOR TRENDS 2023 LIVING FORWARD",
  },
  {
    img: knowledge2,
    text: "TOA COLOR TRENDS 2023 LIVING FORWARD",
  },
  {
    img: knowledge3,
    text: "TOA COLOR TRENDS 2023 LIVING FORWARD",
  },
];

const Knowledge = () => {
  return (
    <div className="px-5 mt-10 xl:w-[70%] md:w-[80%] mx-auto">
      <h1 className="text-3xl xl:text-4xl font-bold text-center">Knowledge</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-3  mt-10 gap-4">
        {knowledges.map(({ img, text }) => {
          return (
            <div className="group cursor-pointer py-3">
              <img
                src={img}
                className="w-80 h-36 md:h-44 xl:w-96 xl:h-60 rounded-lg group-hover:scale-95 transition-all ease-in-out duration-500"
              />
              <p className="w-[95%] mt-3 group-hover:text-red-600 xl:text-md">
                {text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 xl:mt-14 ">
        <h1 className="text-3xl xl:text-4xl  font-bold text-center">
          Project Reference
        </h1>
        <div className="w-[98%] m-auto bg-white p-4 mt-5 xl:mt-10 rounded-md">
          <h1 className="text-2xl xl:text-2xl font-bold border-b-4 border-red-500">
            Jobs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
