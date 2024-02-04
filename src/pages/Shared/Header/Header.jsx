import { useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

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
          <Link to='/'><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
            className="w-20 md:w-32"
            alt="Airbnb Logo"
          /></Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={toggleMobileMenu}
                  className="flex gap-5 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <Link className="text-2xl" to="profile"><FaUserCircle/></Link>
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
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                          Bookings
                        </Link>
                      </li>
                      <li>
                        <Link to="/hosting-dashboard" onClick={() => setMobileMenuOpen(false)}>
                          My Hosting
                        </Link>
                      </li>
                      
                      <li>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                          Contact
                        </Link>
                      </li>
                      </ul>
                      <div className="w-4/3 ml-8 border border-gray-400"></div>
                      {/* Add other mobile menu links as needed */}
                    <ul className="menu p-4 text-gray-700 font-bold text-xl">
                      <li>
                        <Link to="profile" onClick={() => setMobileMenuOpen(false)}>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                          LogOut
                        </Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>

        {/*Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 font-semibold text-lg text-gray-700">
          
          <Link to="/">Home</Link>
          <Link to="/">Bookings</Link>
          <Link to="hosting-dashboard">My Hosting</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Login and Registration Links */}
        <div className="hidden md:flex gap-5 justify-end">
          <Link className="btn btn-sm" to="/">LogOut</Link>
          <Link className="text-3xl" to="profile"><FaUserCircle/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
