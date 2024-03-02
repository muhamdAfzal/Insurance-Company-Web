import About from "./About";
import Banner from "./Banner";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Promotion from "./Promotion";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <About />
      <Service />
      <Promotion />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
