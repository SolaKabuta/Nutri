import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// interface Nabar {
//   propName: type;
// }

const menu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Process", path: "/process" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
];

const Nabar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen bg-primary  text-white font-semibold py-4 px-8 lg:px-24">
      {/* -- Navbar Upper Section -- */}
      <div className="relative flex justify-center items-center gap-2 bg-navbar border border-price rounded-lg mb-2 p-2">
        <img
          className="absolute left-8 hidden md:block md:scale-75 lg:scale-100"
          src="/assets/images/abstract_left.png"
          alt="upper navbar left decoration"
        />
        <img
          className="absolute right-8 hidden md:block md:scale-75 lg:scale-100"
          src="/assets/images/abstract_right.png"
          alt="upper navbar left decoration"
        />
        <img src="/assets/icons/nav_ball_icon.svg" alt="navbar icon" />
        <p className="!text-white flex justify-between text-xs lg:text-base">
          Join Our Personalized Nutrition Demo For Free
        </p>
        {/* -- Arrow icon -- */}
        <svg
          className="lg:ml-2"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* -- Divider -- */}
      <div className="absolute left-0 p-[0.5px] bg-navbar w-screen mt-1"></div>
      <section className="flex items-center justify-between py-4">
        {/* -- Logo -- */}
        <Link to="/">
          <img
            className="transition duration-500 ease-in-out hover:scale-110"
            src="/assets/logo/logo.svg"
            alt="Nutritrionist logo"
            width={130}
            height={130}
          />
        </Link>
        {/* -- Nav -- */}
        <div className="hidden lg:flex gap-5 justify-center items-center">
          {menu.map((item, index) => (
            <ul
              className="transition duration-300 ease-in-out hover:text-accent hover:scale-110 hover:cursor-pointer"
              key={index}
            >
              <Link to={item.path}>{item.label}</Link>
            </ul>
          ))}
          {/* -- Contact CTA -- */}
          <ul>
            <li>
              <Link to="/contact" className="bg-accent text-primary p-3 rounded transition duration-500 hover:bg-white hover:text-primary hover:scale-110 hover:cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* -- Burger Menu -- */}
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-primary lg:hidden"
        >
          <svg className="scale-125" width={44} height={44} viewBox="0 0 24 24">
            <path
              className=" stroke-accent stroke-2"
              d="M3 12H21M3 6H21M9 18H21"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </section>
      {/* -- Sidebar -- */}
        <AnimatePresence>
      {isOpen && (
          <motion.section
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute z-50 top-38 right-0 w-screen min-h-screen bg-primary px-2 md:hidden">
            <div className="lg:flex gap-5 justify-center items-center">
              {menu.map((item, index) => (
                <ul
                  className="flex items-center justify-center w-full mb-2 bg-navbar size-8 py-8 rounded-lg transition ease-in-out accent-accent duration-300"
                  key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </ul>
              ))}
            </div>
          </motion.section>
      )}
        </AnimatePresence>
    </nav>
  );
};

export default Nabar;
