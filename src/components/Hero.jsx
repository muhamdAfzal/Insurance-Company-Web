import banner from "../assets/banner.jpg";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { GiTrophy } from "react-icons/gi";
import Title from "./Title";

const Hero = ({ onToggle }) => {
  return (
    <div className="relative flex lg:flex-row lg:items-center my-4 lg:my-0 4xl:max-w-screen-2xl mx-auto">
      {/* Hero banner image */}
      <img src={banner} alt="hero image" className="hidden lg:block" />

      {/* Hero Text & Button*/}
      <div className="lg:absolute flex flex-col items-center md:items-start gap-6 xl:gap-10 md:ml-14 xl:ml-20 2xl:ml-60 4xl:mx-auto text-center md:text-start max-w-[550px] xl:max-w-[620px]">
        <Title>
          <GiTrophy />
          Award Winning Insurance Company
        </Title>

        <Heading
          text1="We Ensure The Best Insurance Service"
          smallText="text-[50px]"
          largeText="xl:text-[66px]"
        />
        <Paragraph text="Only our company help individuals and businesses manage risks and protect their financial well-being without any extra cost." />
        <Button text="Contact Us" onClick={(e) => onToggle(e)} />
      </div>
    </div>
  );
};

export default Hero;
