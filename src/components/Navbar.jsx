import { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuGridO, CgMenuGridR } from "react-icons/cg";

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
      <nav className="md:px-14 py-6 max-w-screen-2xl mx-auto text-primary">
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
            <ul className="md:flex space-x-6 lg:space-x-10 hidden">
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
          <div className="hidden md:flex items-center">
            <button className="py-3 px-6 text-white bg-green hover:bg-primary rounded transition-all duration-500">
              Contact Us
            </button>
          </div>

          {/* Menu Burger Btn */}
          <div className="md:hidden">
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
        } md:hidden flex-col space-y-7 text-xl text-white bg-primary px-16 py-10`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
