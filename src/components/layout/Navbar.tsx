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
    <nav className="fixed w-screen bg-primary text-white font-semibold py-4 px-24">
      <div className="flex justify-center bg-navbar p-2 rounded-lg mb-2 ">
        <img src="/assets/icons/nav_ball_icon.svg" alt="navbar icon" />
        <p className="!text-white">
          Join Our Personalized Nutrition Demo For Free
        </p>
      </div>
      <div className="absolute left-0 p-[0.5px] bg-navbar w-screen"></div>
      <section className="flex items-center justify-between py-6 ">
        <div>
          <img
            src="/assets/logo/logo.svg"
            alt="Nutritrionist logo"
            width={130}
            height={130}
          />
        </div>
        <div className="flex gap-5 justify-center items-center">
          {menu.map((item, index) => (
            <ul key={index}>
              <li>{item.label}</li>
            </ul>
          ))}
          <ul>
            <li>
              <Button>Contact Us</Button>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Nabar;
