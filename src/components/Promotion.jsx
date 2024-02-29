import promo1 from "../assets/Promo-big.png";
import promo2 from "../assets/Promo-small.png";
import Heading from "./Heading";
import Section from "./Section";
import { MdOutlineDoubleArrow } from "react-icons/md";

const features = [
  {
    title: "Get paid up to 2 days faster",
  },
  {
    title: "No fees, No credit checks",
  },
  {
    title: "Score cashback up to 10%",
  },
  {
    title: "Fast & Easy Process",
  },
];

const Promotion = () => {
  return (
    <div className="bg-primary mt-[1600px] md:my-[450px] py-36">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-28 gap-x-20 xl:gap-x-40 4xl:gap-x-44 max-w-screen-2xl mx-auto md:px-14 xl:px-20 2xl:px-14 4xl:px-0">
        {/* Promotion Contents */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-6 xl:gap-7 md:mt-32 lg:mt-0 lg:max-w-[400px] xl:max-w-[650px]">
          <Section bgColor="border-white" txtColor="text-white">
            Why Choose Insurigo
          </Section>

          <Heading
            element2="Our insurance platforms provide seamless integration"
            element1="of systems and fast on-boarding of insurance programs, enabled by our advanced technology platform."
            color2="text-white"
            color1="text-greenLite"
            smallText="text-[40px]"
            largeText="xl:text-[46px]"
          />

          <div className="grid grid-flow-row xl:grid-cols-2 gap-x-16 gap-y-5">
            {features.map((f) => (
              <Feature key={f.title} title={f.title} />
            ))}
          </div>
        </div>

        {/* Promotion Images */}
        <div className="relative flex justify-center items-center md:items-start md:justify-start">
          <img src={promo1} alt="promo.img-big" className="z-10" />
          <img
            src={promo2}
            alt="promo.img-small"
            className="hidden md:block md:absolute md:-bottom-36 md:-left-6 lg:-bottom-48 lg:-left-10 xl:-bottom-36 xl:-left-24 2xl:-bottom-24 z-20"
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title }) => {
  return (
    <div className="flex flex-row gap-x-2">
      <div className="text-2xl text-yellow-400">
        {/* <PiArrowBendDoubleUpRightBold /> */}
        <MdOutlineDoubleArrow />
      </div>
      <p className="text-lg font-semibold text-white">{title}</p>
    </div>
  );
};

export default Promotion;
