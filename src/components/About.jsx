import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
// import aboutDot from "../assets/about-dot.png";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-sm1.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-x-16 xl:gap-x-32 my-36">
      {/* About Images */}
      {/* flex md:flex-none justify-center items-center md:items-start md:justify-start */}
      <div className="md:relative flex md:flex-none justify-center items-center md:items-start md:justify-start md:max-w-[400px] xl:max-w-max">
        {/* <div className="absolute z-0">
          <img src={aboutDot} alt="" className="" />
        </div> */}
        {/* <div className="absolute z-10">
          <img src={about1} alt="" className="" />
        </div> */}

        {/* <img src={aboutDot} alt="" className="md:absolute z-0" /> */}

        <img src={about1} alt="" className="md:aboslute z-10" />
        <img
          src={about2}
          alt=""
          className="hidden md:flex md:absolute z-20 md:-bottom-10 md:-right-10 xl:-bottom-20 xl:-right-14 rounded-xl max-w-[220px] lg:max-w-[235px] xl:max-w-[265px]"
        />
      </div>

      {/* About Contents */}
      <div className="flex flex-col items-center md:items-start text-center md:text-start px-5 md:px-0 gap-6 xl:gap-7 max-w-[400px] xl:max-w-[750px]">
        <Heading
          element="Save 50% on your life insurance policy get now"
          smallText="text-[40px]"
          largeText="xl:text-[50px]"
        />

        <Paragraph element="Insurigo agency is a business or organization that acts as an intermediary between insurance providers (insurance companies) and individuals or businesses seeking insurance coverage. These agencies play a crucial role in the insurance industry by helping customers find suitable insurance policies to protect themselves or their assets against various risks, such as accidents, illness, property damage, liability, and more." />

        <Button element="Know More Insurigo" />
      </div>
    </div>
  );
};

export default About;
