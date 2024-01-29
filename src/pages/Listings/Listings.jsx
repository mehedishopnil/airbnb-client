import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import ListingCard from "./ListingCard";



const Listings = () => {
  const { hotelListData } = useContext(AuthContext);

  return (
    <div className="">
      <h2 className="text-xl font-semibold ml-10 my-5 md:ml-[210px]">{hotelListData.length} Listings</h2>
      <div className=" w-4/5 md:w-2/3 mx-auto">
        {hotelListData.map((item, index) => (
          <ListingCard key={item} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
