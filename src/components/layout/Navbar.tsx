import * as React from "react";
import { Button } from "../ui/button";

// interface Nabar {
//   propName: type;
// }

const menu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/" },
  { label: "Team", path: "/" },
  { label: "Process", path: "/" },
  { label: "Pricing", path: "/" },
  { label: "Blog", path: "/" },
];

const Nabar = () => {
  return (
    <nav className="fixed w-screen bg-primary text-white font-semibold py-4 px-8 lg:px-24">
      {/* -- Navbar Upper Section -- */}
      <div className="relative flex justify-center items-center gap-2 bg-navbar rounded-lg mb-2 p-2">
        <img className="absolute left-8 hidden md:block md:scale-75" src="/assets/images/abstract_left.png" alt="upper navbar left decoration" />
        <img className="absolute right-8 hidden md:block md:scale-75" src="/assets/images/abstract_right.png" alt="upper navbar left decoration" />
        <img src="/assets/icons/nav_ball_icon.svg" alt="navbar icon" />
        <p className="!text-white flex justify-between text-xs lg:text-base">
          Join Our Personalized Nutrition Demo For Free
        </p>
      {/* -- Arrow icon -- */}
        <svg className="lg:ml-2" width={24} height={24} viewBox="0 0 24 24" fill="none">
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
        <div>
          <img
            src="/assets/logo/logo.svg"
            alt="Nutritrionist logo"
            width={130}
            height={130}
          />
        </div>
        {/* -- Nav -- */}
        <div className="hidden lg:flex gap-5 justify-center items-center">
          {menu.map((item, index) => (
            <ul key={index}>
              <li>{item.label}</li>
            </ul>
          ))}
          {/* -- Contact CTA -- */}
          <ul>
            <li>
              <Button>Contact Us</Button>
            </li>
          </ul>
        </div>
        {/* -- Burger Menu -- */}
        <div className="lg:hidden">
          <svg width={24} height={24} viewBox="0 0 24 24" >
              <path
                  className="fill-accent"
                  d="M3 12H21M3 6H21M9 18H21"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
          </svg>
        </div>
      </section>
    </nav>
  );
};

export default Nabar;
