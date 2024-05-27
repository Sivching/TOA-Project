import video1 from "../../assets/image/video1.jpg";
import video2 from "../../assets/image/video2.jpg";
import video3 from "../../assets/image/video3.jpg";
import video4 from "../../assets/image/video4.jpg";

const videos = [
  {
    img: video1,
    text: "TOA SHIEDSERIES : #1 EMULSION PAINT FOR EXTERIOR",
  },
  {
    img: video2,
    text: "TOA SHIEDSERIES : #1 EMULSION PAINT FOR EXTERIOR",
  },
  {
    img: video3,
    text: "TOA SHIEDSERIES : #1 EMULSION PAINT FOR EXTERIOR",
  },
  {
    img: video4,
    text: "TOA SHIEDSERIES : #1 EMULSION PAINT FOR EXTERIOR",
  },
];

const Videos = () => {
  return (
    <div className=" mt-10 md:w-[80%] xl:w-[70%] mx-auto ">
      <h1 className="text-3xl xl:text-4xl font-bold text-center">Video</h1>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2  gap-3">
        {videos.map(({ img, text }) => {
          return (
            <div className="group cursor-pointer py-3   ">
              <img
                src={img}
                className="w-72 h-36 rounded-lg group-hover:scale-95 transition-all ease-in-out duration-500"
              />
              <p className="group-hover:text-red-600  mt-5 xl:mt-2">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
