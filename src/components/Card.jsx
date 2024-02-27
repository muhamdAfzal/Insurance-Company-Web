import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Card = ({ title, description, img, icon }) => {
  return (
    <div className="overflow-hidden max-w-[450px] rounded-xl shadow-xl">
      <div className="relative">
        <img src={img} alt="" className="hover:scale-[1.03] duration-500" />
        <img
          src={icon}
          alt=""
          className="absolute w-14 -bottom-6 left-10  rounded-full p-[5px] bg-teal-500"
        />
      </div>
      <div className="py-8 px-10">
        <Heading
          element={title}
          smallText="text-[25px]"
          largeText="xl:text-[32px]"
        />
        <Paragraph element={description} />
      </div>
    </div>
  );
};

export default Card;
