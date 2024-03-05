import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const Accordian = ({ question, id, isOpen, onOpen, children }) => {
  const nowOpen = id === isOpen;

  function handleToggle() {
    onOpen(nowOpen ? null : id);
  }

  return (
    <div className="px-5 py-2 lg:py-1 2xl:py-2 space-y-1 4xl:space-y-3 rounded-lg md:w-[650px] xl:w-[750px] bg-[#e0ebea]">
      {/* Accordian Question */}
      <div
        className="flex flex-row items-center justify-between hover:cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex flex-row md:items-center space-x-3 capitalize">
          <div className="text-3xl pt-3 md:pt-0 text-green">
            <FaQuestionCircle />
          </div>
          <Heading
            text1={question}
            smallText="text-[22px]"
            largeText="xl:text-[25px]"
            color1={nowOpen && "text-green"}
          />
        </div>
        <div
          className={`text-[22px] ${nowOpen ? "text-green" : "text-primary"}`}
        >
          {nowOpen ? <MdOutlineCloseFullscreen /> : <MdOutlineOpenInFull />}
        </div>
      </div>

      {/* Accordian Answer */}
      {nowOpen && (
        <div className="space-y-3 lg:space-y-1 xl:space-y-3 ">
          <hr className="h-[1.4px] bg-green" />
          <Paragraph text={children} />
        </div>
      )}
    </div>
  );
};

export default Accordian;
