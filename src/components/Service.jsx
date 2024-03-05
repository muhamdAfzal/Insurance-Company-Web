import Card from "./Card";
import Heading from "./Heading";
import serviceBg from "../assets/service-slider-bg.jpg";
import Title from "./Title";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const Service = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("../data.json");

        if (!res.ok)
          throw new Error(
            "Error!! Something went wrong while fetching data!!!"
          );

        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

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
          <Heading text1="We are here to meet your insurance needs" />
        </div>
        <div
          className={
            !isLoading && !error
              ? "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 xl:gap-10 2xl:max-w-screen-2xl mx-auto px-2 md:px-14 xl:px-20 2xl:px-14 4xl:px-0"
              : "max-w-md w-full mx-auto"
          }
        >
          {isLoading && <Loader />}

          {error && <ErrorMessage message={error} />}

          {!isLoading &&
            !error &&
            services.map((service) => (
              <Card key={service.title} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
