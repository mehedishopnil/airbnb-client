import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto my-10">
      {/* Web Section */}
      <div className="grid grid-cols-2 p-5 m-5 border rounded-lg">
        {/* Left Column */}
        <div className="lg:w-1/3 pr-8">
          {/* Your left column content goes here */}
          <div className="mb-4">
            <img
              className="rounded-full w-20 h-20"
              src="https://openclipart.org/download/247319/abstract-user-flat-3.svg" // Replace with your image URL
              alt="Profile"
            />
            {/* Only show on mobile */}
            <div className="mt-2 lg:hidden text-center"> {/* Centered alignment for mobile */}
              <h2 className="text-xl font-semibold">Your Name</h2>
              <p className="text-gray-500">Superhost</p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3">
          {/* Your right column content goes here */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <p>Some review details...</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Rating</h2>
            <p>Some rating details...</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Years Hosting</h2>
            <p>Some hosting details...</p>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>

      {/* Mobile Section */}
      <div className="lg:hidden">
        {/* Top Section */}
        

        {/* Bottom Section */}
        <div className="text-center">
          {/* Icon with Text */}
          <div className="flex items-center mb-2">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Your icon SVG code goes here */}
            </svg>
            {/* Text */}
            <p>Your icon text</p>
          </div>

          {/* Add more icons with text as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
