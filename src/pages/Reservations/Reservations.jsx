import { useEffect, useState } from 'react';
import InfoCard from '../Shared/InfoCard/InfoCard';

const Reservations = () => {
  const [reservationsData, setReservationsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    fetch('hotelData.json')
      .then((response) => response.json())
      .then((data) => {
        setReservationsData(data);
        filterData(data, 'All');
      })
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);
  console.log(reservationsData);

  const filterData = (data, filter) => {
    let filteredData;
    
    if (filter === 'All') {
      // Display all data for the 'All' filter
      filteredData = data;
    } else {
      // Filter data based on other filters
      filteredData = data.filter((item) => item.category === filter);
    }

    setFilteredData(filteredData);
    setSelectedFilter(filter);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4">Reservations</h2>

      {/* Filter Section */}
      <div className="flex items-center justify-center gap-10 mb-4">
        <button
          className={`cursor-pointer ${selectedFilter === 'Upcoming' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData(reservationsData, 'Upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'Complete' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData(reservationsData, 'Complete')}
        >
          Complete
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'Canceled' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData(reservationsData, 'Canceled')}
        >
          Canceled
        </button>
        <button
          className={`cursor-pointer ${selectedFilter === 'All' ? 'text-blue-500 font-bold' : ''}`}
          onClick={() => filterData(reservationsData, 'All')}
        >
          All
        </button>
      </div>
      <div className='flex justify-center '>
        <span className='w-[400px] border border-gray-300'></span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
