import { useEffect, useState } from 'react';
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

  // Filter cards based on the selected category
  const filteredData =
    selectedCategory === 'All' ? hotelData : hotelData.filter((item) => item.category === selectedCategory);

  return (
    <div>
    
      {/* Filter Section */}
      <div className="mb-4 pt-10 pl-10">
        <label className="text-sm font-semibold">Filter by Category:</label>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <Cards key={index} 
          data={item}

           />
        ))}
      </div>
    </div>
  );
};

export default Home;
