import { useEffect, useState } from 'react';
import { FaTree, FaUmbrellaBeach, FaWarehouse } from 'react-icons/fa';
import Cards from './Cards/Cards';
import { MdHouseboat } from 'react-icons/md';
import { GiIsland } from "react-icons/gi";

const Home = () => {
  const [hotelData, setHotelData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  // Filter cards based on the selected category and current page
  const filteredData =
    selectedCategory === 'All'
      ? hotelData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : hotelData
          .filter((item) => item.category === selectedCategory)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    (selectedCategory === 'All' ? hotelData.length : hotelData.filter((item) => item.category === selectedCategory).length) / itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Filter Section */}
      <div className="flex flex-col items-center mb-4 pt-10 mx-4 md:px-10">
        <div className="flex items-center space-y-2 md:space-x-2 md:space-y-0">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex justify-center items-center mr-5 mt-2 md:m-0 p-4 md:p-5 border rounded ${
                selectedCategory === category ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryIcons[category]}
              <span className="hidden md:inline">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {filteredData.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-center mt-4">
        <button
          className="mr-2 px-4 py-2 border rounded focus:outline-none"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="ml-2 px-4 py-2 border rounded focus:outline-none"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Home;
