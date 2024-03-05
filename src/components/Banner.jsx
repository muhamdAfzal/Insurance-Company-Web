import Paragraph from "./Paragraph";
import { FaUmbrella } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto lg:px-10 2xl:px-4 4xl:px-0">
        <div className="flex flex-row gap-x-4 my-10 px-4 md:px-14 lg:px-10">
          <div className="text-yellow-400 pt-1 text-3xl">
            <FaUmbrella />
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-bold">More Coverage</h3>
            <Paragraph
              text="Insurigo covers 12,600+ injuries and illness from concussions to cancer"
              color="text-white"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-4 p-5 md:px-14 lg:px-10 bg-greenAlternative">
          <div className="text-yellow-400 my-1 lg:my-5 xl:my-1 2xl:my-5 text-3xl">
            <GiCheckMark />
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            <h3 className="text-2xl font-bold">Less Hassle</h3>
            <Paragraph
              text="One easy-to-manage plan with paperless instant and online admin
              tools"
              color="text-white"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-4 my-10 px-4 md:px-14 lg:px-10">
          <div className="text-yellow-400 pt-1 text-3xl">
            <GiWallet />
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-bold">Faster Benefits</h3>
            <Paragraph
              text="Insurigo pays claims in hours, not weeks. So people can rest easy"
              color="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
