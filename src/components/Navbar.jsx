import { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuGridO, CgMenuGridR } from "react-icons/cg";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toogleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Services", path: "services" },
    { link: "About Us", path: "about" },
    { link: "Contact Us", path: "contact" },
  ];

  return (
    <>
      <nav className="py-6 text-primary max-w-screen-2xl mx-auto md:px-14 4xl:px-0">
        <div className="text-base lg:text-2xl container mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            {/* Main Logo */}
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-44 inline-block items-center"
              />
            </a>

            {/* Navbar Menus */}
            <ul className="lg:flex space-x-6 lg:space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block hover:text-green transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="hidden lg:flex">
            <Button element={"Contact Us"} />
          </div>

          {/* Menu Burger Btn */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary focus:text-secondary"
            >
              {isMenuOpen ? (
                <CgMenuGridO className="w-10 h-10" />
              ) : (
                <CgMenuGridR className="w-10 h-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Burger NavItems */}
      <div
        className={`${
          !isMenuOpen ? "hidden" : "flex"
        } lg:hidden flex-col gap-10 text-xl text-white bg-primary px-16 py-20 transition-all duration-500`}
      >
        <div className="flex flex-col space-y-7">
          {navItems.map(({ link, path }) => (
            <a key={link} href={path} className="">
              {link}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <Button element={"Contact Us"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
