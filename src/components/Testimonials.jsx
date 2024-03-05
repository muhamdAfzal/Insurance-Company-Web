import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Title from "./Title";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import partner3 from "../assets/partner-3.png";
import partner4 from "../assets/partner-4.png";
import googleRating from "../assets/google-rating.png";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";

// my-28

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32 max-w-screen-2xl mx-auto xl:mt-[450px] 2xl:mt-[550px] 4xl:mt-[700px] lg:mb-36 px-14 4xl:px-0 py-24 lg:py-0">
      <div className="col-span-1 flex flex-col items-start space-y-5">
        <Title>Testimonials</Title>
        <Heading text1="Read our success story to find the happiness" />
        <Paragraph text="Our company has been operating for more than 30 years and has been growing exponentially" />

        {/* Ratings */}
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-x-10 items-center">
          <div className="flex flex-row gap-x-8 items-center py-5">
            <div className="rounded-full p-[5px] text-5xl bg-green text-white">
              <PiHandshakeFill />
            </div>
            <div className="flex flex-row gap-x-1">
              <p className="text-xl text-gray-600">Avg Rating 4.9</p>
              <div className="text-orange-500 text-[22px]">
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <img src={googleRating} alt="Google Rating" />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="col-span-1 flex space-x-10">
        <div className="text-green text-6xl">
          <BsChatRightQuoteFill />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-600 text-4xl font-medium">
            A successful company to invest ones insurance and be stress free in
            whole life. Taking seemless performance indicates a trustworthy
            company for ones life.
          </p>
          <hr className="bg-greenLite h-[1.5px]" />
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-green">Tech Howard</p>
            <p className="text-lg text-gray-600">
              CEO of <span className="font-semibold">IT Tech</span>
            </p>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="col-span-1 lg:col-span-2 grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 space-y-10 lg:space-y-0 items-center">
        <h4 className="row-span-1 lg:col-span-1 text-2xl font-semibold text-primary mx-auto lg:mx-0">
          Our Worldwide Partners
        </h4>
        <div className="row-span-4 lg:col-span-3 flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-center justify-between">
          <img src={partner1} alt="Spectranet" />
          <img src={partner2} alt="Disrupt" />
          <img src={partner3} alt="Air Peace" />
          <img src={partner4} alt="Transit" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
