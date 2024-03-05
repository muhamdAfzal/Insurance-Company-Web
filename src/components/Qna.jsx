import Heading from "./Heading";
import Title from "./Title";
import qnaBg from "../assets/faq_bg_image.jpg";
import { useState } from "react";
import Accordian from "./Accordian";

const data = [
  {
    question: "What is insurance service?",
    answer:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate customer service with ideas.",
  },
  {
    question: "How many services do we provied?",
    answer:
      "Quite a lot and planning to add more. We always try to help our customers the best way we can.",
  },
  {
    question: "What is the experience of our team members?",
    answer:
      "Our team members are very experienced and knowledgable in insurance policy. We always try to help our customers the best way we can.",
  },
  {
    question: "What do I get for $0 with my plan?",
    answer:
      "It is a starting for any plan for our customers need. We always try to help our customers the best way we can.",
  },
];

const Qna = () => {
  const [isOpen, setIsOpen] = useState(1);

  return (
    <div className="relative flex lg:flex-row lg:items-center py-24 lg:py-0 lg:mb-96 mx-auto bg-[#edf5f5] lg:bg-transparent">
      <img src={qnaBg} alt="" className="hidden lg:block absolute w-full" />

      {/* Contents */}
      <div className="lg:absolute flex flex-col space-y-5 lg:space-y-1 xl:space-y-3 2xl:space-y-6 md:ml-14 xl:ml-20 2xl:ml-60 4xl:ml-[510px] items-center md:items-start text-center md:text-start max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
        <Title>Find The Right Insurance</Title>
        <Heading
          text1="We're here to assist you with exploring protection"
          smallText="text-[38px]"
        />
        <div className="space-y-4 lg:space-y-1 xl:space-y-3 2xl:space-y-7 px-2">
          {data.map((el, i) => (
            <Accordian
              key={el.question}
              question={el.question}
              id={i + 1}
              isOpen={isOpen}
              onOpen={setIsOpen}
            >
              {el.answer}
            </Accordian>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qna;
