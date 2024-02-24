import banner from "../assets/banner.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative flex lg:items-center my-4 lg:my-0">
      {/* Hero banner image */}
      <img src={banner} alt="" className="hidden lg:flex" />

      {/* Hero Text */}
      <div className="absolute flex flex-col items-start gap-7 xl:gap-10 max-w-[620px]">
        <h2 className="text-[50px] xl:text-[66px] font-bold leading-[60px] text-primary">
          We Ensure The Best Insurance Service
        </h2>
        <p className="text-[17px] xl:text-[20px] text-gray-600">
          Only our company help individuals and businesses manage risks and
          protect their financial well-being without any extra cost.
        </p>
        <Button element={"Contact Us"} />
      </div>
    </div>
  );
};

export default Hero;
