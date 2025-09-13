import { Button } from "../ui/button";

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
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <nav className="w-screen bg-primary text-white font-semibold py-4 px-8 lg:px-24">
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
          
        </div>
        {/* -- CTA Go To Top -- */}
        <div className="flex gap-3 items-center">
          <a href="">Go To Top</a>
          <a href="#">
            <svg className="bg-navbar rounded-full" width={16} height={16} viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 20V4M12 4L6 10M12 4L18 10"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
          </a>
        </div>
      </section>
      {/* -- Footer Lower Section -- */}
      <div className="relative grid justify-center bg-navbar rounded-lg mb-2 p-2">
        <p className="!text-white flex justify-between text-xs lg:text-base">
          Join Our Personalized Nutrition Demo For Free
        </p>
      </div>
    </nav>
  );
};

export default Footer;
