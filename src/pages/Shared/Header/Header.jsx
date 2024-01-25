import { useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto bg-slate-300 py-5 px-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
            className="w-20 md:w-32"
            alt="Airbnb Logo"
          />
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <MdMenu size={24} />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition-transform duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-transform duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Disclosure.Panel>
                    <ul className="menu p-4 text-gray-700 font-bold text-xl">
                      <li>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="login" onClick={() => setMobileMenuOpen(false)}>
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="registration"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Registration
                        </Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 font-semibold text-lg text-gray-700">
          <Link to="/">Home</Link>
        </div>

        {/* Login and Registration Links */}
        <div className="hidden md:flex gap-5 justify-end">
          <Link to="login">Login</Link>
          <Link to="registration">Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
