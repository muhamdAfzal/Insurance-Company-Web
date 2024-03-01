import Card from "./Card";
import Heading from "./Heading";
import serviceBg from "../assets/service-slider-bg.jpg";
import Title from "./Title";

// md:px-10 4xl:px-0
// 4xl:gap-x-24

const services = [
  {
    title: "Car Insurance",
    description:
      "This insurance provides protection and benefits to a car owner and intended to address risks.",
    img: "https://demo.rstheme.com/html/insurigo/assets/images/service-thumb-5.jpg",
    icon: "https://cdn4.iconfinder.com/data/icons/insurance-85/32/Artboard_6-512.png",
  },
  {
    title: "Health Insurance",
    description:
      "This insurance provides protection and benefits to an entire familys health and intended to address risks.",
    img: "https://demo.rstheme.com/html/insurigo/assets/images/service-thumb-1.jpg",
    icon: "https://cdn0.iconfinder.com/data/icons/insurance-line-unexpected-situations/512/Insurance-512.png",
  },
  {
    title: "Business Insurance",
    description:
      "This insurance provides protection and benefits to a business owner and intended to address risks.",
    img: "https://demo.rstheme.com/html/insurigo/assets/images/service-thumb-3.jpg",
    icon: "https://cdn2.iconfinder.com/data/icons/thin-business-1/24/thin-1089_deal_money_business-2-512.png",
  },
];

const Service = () => {
  return (
    <div className="xl:relative flex justify-center mb-[1050px] lg:mb-0">
      <img
        src={serviceBg}
        alt=""
        className="h-96 lg:h-[540px] xl:h-[710px] 4xl:h-[770px] 4xl:w-screen z-10"
      />

      <div className="absolute my-20 xl:my-32 flex flex-col justify-center items-center gap-y-4 z-20">
        <Title>Our Services</Title>
        <div className="max-w-[650px] text-center mb-12">
          <Heading
            element1="We are here to meet your insurance needs"
            smallText="text-[40px]"
            largeText="xl:text-[50px]"
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 xl:gap-10 2xl:max-w-screen-2xl mx-auto px-2 md:px-14 xl:px-20 2xl:px-14 4xl:px-0">
          {services.map((service) => (
            <Card key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
