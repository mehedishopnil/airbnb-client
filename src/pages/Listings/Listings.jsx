import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import ListingCard from "./ListingCard";
import { BsSearch } from "react-icons/bs"; // Import the search icon

const Listings = () => {
  const { hotelListData } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the listings based on the search term
  const filteredListings = hotelListData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8">
      {/* Search bar with search icon */}
      <div className="flex justify-center items-center relative w-4/5 mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full p-2 pr-10 rounded border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-2">
          <BsSearch size={20} color="#777" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-center mb-5">
        {filteredListings.length} Listings
      </h2>
      <div className="w-4/5 md:w-2/3 mx-auto">
        {filteredListings.map((item, index) => (
          <ListingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
