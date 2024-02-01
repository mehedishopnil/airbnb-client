import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

import { BsSearch } from "react-icons/bs";
import ListingCard from "../Listings/ListingCard";

const Contact = () => {
  const { hotelListData, loading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    // Filter the listings based on the search term
    const filteredData = hotelListData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filteredData);
  }, [hotelListData, searchTerm]);

  return (
    <div className="mt-8">
      {/* Search bar with search icon */}
      <div className="flex justify-center items-center relative w-4/5 md:w-1/2 mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full p-2 pr-10 rounded-full border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-2">
          <BsSearch size={20} color="#777" />
        </div>
      </div>
      <div className="flex justify-start ml-10 md:ml-[280px]">
        <h2 className="text-xl font-semibold mb-5">
          {loading ? "Loading..." : `${filteredListings.length} Listings`}
        </h2>
      </div>
      <div className="w-4/5 md:w-2/3 mx-auto">
        {loading ? (
          <p>Loading...</p> // You can replace this with a loading indicator or placeholder
        ) : (
          filteredListings.map((item, index) => (
            <ListingCard key={item.id} item={item} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Contact;
