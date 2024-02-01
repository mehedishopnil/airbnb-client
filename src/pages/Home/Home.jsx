import { useContext, useState } from 'react';
import { FaTree, FaUmbrellaBeach, FaWarehouse } from 'react-icons/fa';
import Cards from './Cards/Cards';
import { MdHouseboat } from 'react-icons/md';
import { GiIsland } from 'react-icons/gi';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { BsSearch } from 'react-icons/bs';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term
  const itemsPerPage = 9;

  const { hotelData } = useContext(AuthContext);

  const categories = Array.from(new Set(hotelData.map((item) => item.category)));

  const categoryIcons = {
    'Tropical': <FaTree />,
    'Beach': <FaUmbrellaBeach />,
    'Tiny homes': <MdHouseboat />,
    'Farms': <FaWarehouse />,
    'Islands': <GiIsland />,
  };

  const filteredData = hotelData
  .filter((item) => (selectedCategory === 'All' || item.category === selectedCategory))
  .filter(
    (item) =>
      (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.location && item.location.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



  const totalPages = Math.ceil(
    hotelData.filter((item) => selectedCategory === 'All' || item.category === selectedCategory).length / itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Search bar with search icon */}
      <div className="flex justify-center items-center mt-5 mb-4">
      <div className="bg-white rounded-full border p-3 shadow w-4/5 mx-auto flex items-center">
        <BsSearch size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full h-10 pl-4 rounded-full outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col justify-center items-center mb-4 pt-10 mx-4 md:px-10">
        <div className="flex items-center justify-center space-y-2 md:space-x-2 md:space-y-0">
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
