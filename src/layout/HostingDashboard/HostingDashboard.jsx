import { Link, Outlet } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { MdOutlineLuggage } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiBookOpenText } from "react-icons/pi";
import { MdAddHome } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";

const HostingDashboard = () => {
  return (
    <div>
      <div className="lg:flex">

        {/* Sidebar for LG screens */}
        <div className="lg:w-64 lg:flex-shrink-0 md:bg-slate-200">
          <ul className="menu p-4 text-gray-700 font-bold text-lg">
            <li>
              <Link to="listings">
              <HiOutlineHomeModern /> Listings
              </Link>
            </li>
            <li>
              <Link to="reservation">
                <MdOutlineLuggage /> Reservations
              </Link>
            </li>
            <li>
              <Link to="earnings">
                <LiaMoneyBillSolid /> Earnings
              </Link>
            </li>
            <li>
              <Link to="insights">
                <TbBrandGoogleAnalytics /> Insights
              </Link>
            </li>
            <li>
              <Link to="guide-books">
                <PiBookOpenText /> Guidebooks
              </Link>
            </li>
            <li>
              <Link to="create-new-list">
                <MdAddHome /> Create a new list
              </Link>
            </li>

            <div className="border border-gray-400"></div>

            <li>
              <Link to="/">
              <FaHome /> Home
              </Link>

              <Link to="/profile">
              <FaUser /> Profile
              </Link>
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
                <Disclosure.Panel className=" p-4">
                  <ul className="menu text-gray-700 font-bold text-xl">
                    <li>
                      <Link to="reservation">Reservations</Link>
                    </li>
                    <li>
                      <Link to="earnings">Earnings</Link>
                    </li>
                    <li>
                      <Link to="reservation">Insights</Link>
                    </li>
                    <li>
                      <Link to="reservation">Guidebooks</Link>
                    </li>
                    <li>
                      <Link to="reservation">Create a new list</Link>
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
