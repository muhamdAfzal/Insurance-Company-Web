import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Card = ({ service }) => {
  const { title, description, img, icon } = service;

  return (
    <div className="overflow-hidden max-w-[450px] xl:max-w-[500px] rounded-xl shadow-xl">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="hover:scale-[1.03] duration-500"
        />
        <img
          src={icon}
          alt=""
          className="absolute w-14 -bottom-6 left-10  rounded-full p-[5px] bg-green"
        />
      </div>
      <div className="py-8 px-10">
        <Heading
          text1={title}
          smallText="text-[25px]"
          largeText="xl:text-[32px]"
        />
        <Paragraph text={description} />
      </div>
    </div>
  );
};

export default Card;
