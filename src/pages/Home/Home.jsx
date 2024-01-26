import { useEffect, useState } from 'react';
import { FaTree, FaUmbrellaBeach, FaWarehouse } from 'react-icons/fa';
import { MdHouseboat } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import Cards from './Cards/Cards';

const Home = () => {
  const [hotelData, setHotelData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch('hotelData.json')
      .then((response) => response.json())
      .then((data) => setHotelData(data))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  // Get unique categories from the JSON data
  const categories = Array.from(new Set(hotelData.map((item) => item.category)));

  // Define icons for each category
  const categoryIcons = {
    'Tropical': <FaTree />,
    'Beach': <FaUmbrellaBeach />,
    'Tiny homes': <MdHouseboat />,
    'Farms': <FaWarehouse />, // Using the same icon as Tiny Homes for demonstration, you can change it
    'Islands': <GiIsland />, // Using the same icon as Beach for demonstration, you can change it
    // Add more categories and their corresponding icons as needed
  };

  // Filter cards based on the selected category
  const filteredData =
    selectedCategory === 'All' ? hotelData : hotelData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Filter Section */}
      <div className="flex items-center justify-center mb-4 pt-10 px-10">
        <div className="flex items-center space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex justify-center gap-10 items-center px-5 py-2 border rounded ${
                selectedCategory === category ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryIcons[category]}
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
