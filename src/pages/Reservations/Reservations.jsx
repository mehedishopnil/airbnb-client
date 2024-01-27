import { useContext, useEffect, useState } from 'react';
import InfoCard from '../Shared/InfoCard/InfoCard';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Reservations = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const { hotelData = [] } = useContext(AuthContext);

  useEffect(() => {
    // Initial rendering with 'All' filter
    filterData('All');
  }, [hotelData]);

  const filterData = (filter) => {
    let filteredData;

    if (filter === 'All') {
      // Filter out 'Beach' category
      filteredData = hotelData.filter((item) => item.category !== 'Beach');
    } else {
      // Filter data based on other filters
      filteredData = hotelData.filter((item) => item.category === filter);
    }

    setFilteredData(filteredData);
    setSelectedFilter(filter);
  };

  const renderFilteredData = () => {
    return filteredData.map((item, index) => (
      <InfoCard key={index} data={item} />
    ));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4">Reservations</h2>

      {/* Filter Section */}
      <div className="flex items-center justify-center gap-10 mb-4">
        <button
          className={`cursor-pointer ${selectedFilter === 'Upcoming' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData('Upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'Complete' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData('Complete')}
        >
          Complete
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'Canceled' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData('Canceled')}
        >
          Canceled
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'All' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData('All')}
        >
          All
        </button>
      </div>
      <div className='flex justify-center '>
        <span className='w-[400px] border border-gray-300'></span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {renderFilteredData()}
      </div>
    </div>
  );
};

export default Reservations;
