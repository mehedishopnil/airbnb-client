import React from 'react';
import { TbGenderFemale } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { MdWorkOutline } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineLightbulbCircle } from "react-icons/md";
import { MdOutlineRoomService } from "react-icons/md";

const Profile = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-2 my-10">
      <div className='lg:grid  lg:justify-center '>
      <div className="grid grid-cols-5  lg:flex   p-5 m-10 border rounded-[30px] shadow-sm">
        {/* First Section (Left) */}
        <div className="flex justify-end  items-center col-span-2 pr-8 lg:mr-10">
          <div className="flex flex-col items-center lg:pl-5 mb-4">
            <img
              className="rounded-full w-20 h-20 "
              src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
              alt="Profile"
            />

            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">Ibrahim Elsamra</h2>
              <p className="text-gray-500">Superhost</p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>

        {/* Second Section (Right) */}
        <div className="flex flex-col items-center lg:items-center lg:m-5 text-left col-span-3">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">88</h2>
            <p>Reviews</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">4.8</h2>
            <p>Rating</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">3</h2>
            <p>Hosting</p>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>
      </div>

      {/* Bottom Section */}
      <div className='lg:grid  lg:items-center lg:-ml-10 lg:-mt-5 lg:pr-10'>
      <div className="ml-10  lg:col-span-4 lg:space-y-3">
        <div className="flex gap-1 items-center mb-2">
          <TbGenderFemale />
          <p className="text-gray-700">Born in the 70s</p>
        </div>

        <div className="flex gap-1 items-center mb-2">
          <SlGraduation />
          <p className="text-gray-700">
            Where I went to school: University of ...
          </p>
        </div>

        <div className="flex gap-1 items-center mb-2">
          <MdWorkOutline />
          <p className="text-gray-700">My work: CXO</p>
        </div>

        <div className="flex gap-1 mb-2">
          <BsStars />
          <p className="text-gray-700">
            What makes my home unique: House built with recycled materials
          </p>
        </div>

        <div className="flex gap-1 items-center mb-2">
          <MdOutlineLightbulbCircle />
          <p className="text-gray-700">
            Fun fact: I lived in 6 different countries
          </p>
        </div>

        <div className="flex gap-1 items-center mb-2">
          <MdOutlinePets />
          <p className="text-gray-700">Pets: Two dogs, Hiro and Pasqual</p>
        </div>

        <div className="flex gap-1 items-center mb-2">
          <MdOutlineRoomService />
          <p className="text-gray-700">
            For guests, I always: Try to answer their needs
          </p>
        </div>
        <div className="mx-5 px-2 lg:-m-3 lg:w-10/12">
          <p>
            I'm 'your name', I've lived in 6 different countries, and I still
            spend way too much time traveling. Here at home, we have two dogs
            named Hiro and Pasqual. We cannot wait to meet you.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
