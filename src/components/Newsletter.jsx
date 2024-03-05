import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Title from "./Title";
import newsBg from "../assets/newsletter_bg.jpg";
import Button from "./Button";
import imgLine from "../assets/news_line.png";

const Newsletter = () => {
  return (
    <div className="relative flex items-center justify-center bg-[#edf5f5] lg:bg-transparent py-8 lg:p-0">
      {/* Background Image */}
      <img
        src={newsBg}
        alt="newsletter_Background"
        className="hidden lg:block w-full h-80"
      />

      {/* Newsletter Contents */}
      <div className="lg:absolute flex flex-col lg:flex-row justify-between space-y-5 w-screen max-w-screen-2xl px-14 4xl:px-0">
        <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-start">
          <Title>Newsletter</Title>
          <Heading text1="Get Daily Insurance News" />
          <Paragraph text="Get instant news by subscribe to our daily newsletter" />
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-10 items-center md:items-start">
          {/* Email Input & Button */}
          <div className="flex flex-row items-center justify-between max-w-[500px] space-x-5 p-4 rounded-xl bg-white">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-48 p-2"
            />
            <Button text="Subscribe Now" />
          </div>
          <div>
            <img src={imgLine} alt="" />
            <img src={imgLine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
