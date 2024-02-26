import banner from "../assets/banner.jpg";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <div className="lg:relative flex lg:flex-row lg:items-center my-4 lg:my-0">
      {/* Hero banner image */}
      <img src={banner} alt="" className="hidden lg:flex" />

      {/* Hero Text & Button*/}
      <div className="lg:absolute flex flex-col items-center md:items-start gap-7 xl:gap-10 px-5 md:px-0 text-center md:text-start max-w-[550px] xl:max-w-[620px]">
        <Heading
          element="We Ensure The Best Insurance Service"
          smallText="text-[50px]"
          largeText="xl:text-[66px]"
        />
        <Paragraph element="Only our company help individuals and businesses manage risks and protect their financial well-being without any extra cost." />

        <Button element="Contact Us" />
      </div>
    </div>
  );
};

export default Hero;
