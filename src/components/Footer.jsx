import footerBg from "../assets/footer_bg.jpg";
import logo from "../assets/logo_light.png";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import {
  FaAddressCard,
  FaPhone,
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";

const quickLinks = [
  { link: "Home", path: "/" },
  { link: "Services", path: "/" },
  { link: "Testimonials", path: "/" },
  { link: "About Us", path: "/" },
  { link: "Contact Us", path: "/" },
];

const services = [
  { title: "Life Insurance" },
  { title: "Health Insurance" },
  { title: "Car Insurance" },
  { title: "Travel Insurance" },
  { title: "Business Insurance" },
];

const Footer = ({ onToggle }) => {
  return (
    <footer className="lg:relative flex justify-center items-center py-10 md:pb-0 md:pt-20 lg:pt-[190px] xl:pt-[270px] 4xl:pt-[360px] bg-[#003b37] lg:bg-transparent">
      <img
        src={footerBg}
        alt="footer_background"
        className="hidden lg:block w-full h-96 xl:h-auto absolute"
      />
      <div className="lg:absolute grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-1 lg:grid-cols-4 gap-y-5 xl:gap-y-16 justify-items-center md:justify-items-stretch content-between max-w-screen-2xl mx-auto md:px-14 4xl:px-0 text-white">
        {/* Logo, text info & social media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start text-balance space-y-8 pt-3">
          <a href="/">
            <img src={logo} alt="Insurigo_Logo" className="w-48 xl:w-56" />
          </a>
          <Paragraph
            text="Insurigo is a renowned insurance company established in 2003 and serving customers for over 20 years"
            color="text-white"
          />
          <div className="flex flex-row gap-x-5 text-2xl">
            <a href="/" className="social-icon">
              <FaFacebook />
            </a>
            <a href="/" className="social-icon">
              <BsTwitterX />
            </a>
            <a href="/" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="/" className="social-icon">
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <Heading
            text1="Quick Link"
            color1="text-white"
            smallText="text-[20px]"
            largeText="xl:text-[23px]"
          />
          <div className="flex flex-col gap-y-2">
            {quickLinks.map(({ link, path }) => (
              <a
                key={link}
                href={path}
                className="hover:text-green transition-colors duration-500"
                onClick={link === "Contact Us" && ((e) => onToggle(e))}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <Heading
            text1="Our Services"
            color1="text-white"
            smallText="text-[20px]"
            largeText="xl:text-[23px]"
          />
          <div className="flex flex-col gap-y-2">
            {services.map(({ title }) => (
              <ul key={title}>{title}</ul>
            ))}
          </div>
        </div>

        {/* Get in touches */}
        <div className="flex flex-col items-center md:items-start">
          <Heading
            text1="Get In Touch"
            color1="text-white"
            smallText="text-[20px]"
            largeText="xl:text-[23px]"
          />
          <div className="space-y-3">
            <div className="flex gap-x-3">
              <FaAddressCard />
              <p>374 William S Canning Blvd, Fall River MA 2721, USA</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <FaPhone />
              <p>+00 9800 7804 23</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <RiMailSendFill />
              <p>contact@insurigo.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-2 lg:col-span-4 text-center flex flex-col gap-y-5">
          <hr />
          <p>
            Copyright © 2024 - All rights reserved to "Insurigo" Insurance Co
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
