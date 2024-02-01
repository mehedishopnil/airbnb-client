import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ item, index }) => {
  const navigate = useNavigate();
  const { earningList } = useContext(AuthContext);
  console.log(earningList);

  // Function to find the corresponding item in earningList by id
  const findEarningListById = (id) => {
    return earningList.find((earningItem) => earningItem.id === id);
  };

  const handleClick = () => {
    const selectedEarning = findEarningListById(item.id);

    if (selectedEarning) {
      // Use react-router-dom's navigate to navigate without a full page reload
      navigate(`/individual-earnings/${item.id}`);
    } else {
      // Handle case when matching data is not found
      console.error("Matching data not found");
    }
  };

  return (
    <div
      key={index}
      className="border rounded border-gray-200 mb-4 md:mb-4 p-4 flex items-center justify-between cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-10">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            {/* Set the image from the data */}
            <img src={item.image} alt={`Listing ${index + 1}`} />
          </div>
        </div>
        <div className=" ">
          <p className="font-semibold ">{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <IoIosArrowForward />
    </div>
  );
};

export default ListingCard;
