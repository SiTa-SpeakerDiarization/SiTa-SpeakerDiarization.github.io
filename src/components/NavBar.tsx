import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  };

  return (
    <div
      className={`fixed w-full transition-all duration-300 z-50 ${
        isSticky ? "top-0" : "top-10"
      }`}
    >
      <nav className="h-[20vh] flex">
        <div className="container px-4 flex flex-row items-center">
          <h1 className="text-xl font-bold text-white">
            <IoHome
              size={24}
              className="text-green-500 hover:text-green-700"
              onClick={scrollToTop} // Add onClick handler
            />
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
