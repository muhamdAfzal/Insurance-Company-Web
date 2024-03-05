import About from "./About";
import Banner from "./Banner";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Promotion from "./Promotion";
import Qna from "./Qna";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = ({ onToggle }) => {
  return (
    <>
      <Hero onToggle={onToggle} />
      <Banner />
      <About />
      <Service />
      <Promotion />
      <Qna />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
