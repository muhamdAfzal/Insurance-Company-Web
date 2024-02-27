import Card from "./Card";
import Heading from "./Heading";

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
    <div className="flex flex-col justify-center items-center gap-y-16">
      <div className="max-w-[650px] text-center">
        <Heading
          element="We are here to meet your insurance needs"
          smallText="text-[40px]"
          largeText="xl:text-[50px]"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            img={service.img}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
