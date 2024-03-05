import Button from "./Button";
import Heading from "./Heading";
import Title from "./Title";
import Paragraph from "./Paragraph";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-sm1.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-28 gap-x-20 xl:gap-x-32 4xl:gap-x-40 my-36 max-w-screen-2xl mx-auto md:px-14 xl:px-20 2xl:px-14 4xl:px-0">
      {/* About Images */}
      <div className="md:relative flex justify-center items-center md:items-start md:justify-start md:max-w-[400px] xl:max-w-max">
        <img src={about1} alt="" className="z-10" />

        <img
          src={about2}
          alt=""
          className="hidden md:flex md:absolute z-20 md:-bottom-10 md:-right-10 xl:-bottom-20 xl:-right-14 rounded-xl max-w-[220px] lg:max-w-[235px] xl:max-w-[265px]"
        />
      </div>

      {/* About Contents */}
      <div className="flex flex-col items-center md:items-start text-center md:text-start px-5 md:px-0 gap-6 xl:gap-7 max-w-[400px] xl:max-w-[750px]">
        <Title>About Us</Title>
        <Heading text1="Save 50% on your life insurance policy right now" />

        <Paragraph text="Insurigo agency is a business or organization that acts as an intermediary between insurance providers (insurance companies) and individuals or businesses seeking insurance coverage. These agencies play a crucial role in the insurance industry by helping customers find suitable insurance policies to protect themselves or their assets against various risks, such as accidents, illness, property damage, liability, and more." />

        <Button text="Know More Insurigo" />
      </div>
    </div>
  );
};

export default About;
