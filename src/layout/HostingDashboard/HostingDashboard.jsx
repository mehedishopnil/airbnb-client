import { Link, Outlet } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";

const HostingDashboard = () => {
  return (
    <div>
      <div className="lg:flex">
        {/* Sidebar for LG screens */}
        <div className="lg:w-64 lg:flex-shrink-0">
          <ul className="menu p-4 text-gray-700 font-bold text-xl">
            <li>
              <Link to="reservation">Reservations</Link>
            </li>
            <li>
              <Link to="earnings">Earnings</Link>
            </li>
            <li>
              <Link to="reservation">Reservations</Link>
            </li>
          </ul>
        </div>

        {/* Content area */}
        <div className="lg:flex-grow">
          {/* Page content here */}
          <Outlet />
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden">
        <Disclosure as="div" className="lg:hidden">
          {({ open }) => (
            <>
              
              <Transition
                show={open}
                enter="transition-transform duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Disclosure.Panel className="bg-gray-200 p-4">
                  <ul className="menu text-gray-700 font-bold text-xl">
                    <li>
                      <Link to="reservation">Reservations</Link>
                    </li>
                    <li>
                      <Link to="earnings">Earnings</Link>
                    </li>
                    <li>
                      <Link to="reservation">Reservations</Link>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default HostingDashboard;
