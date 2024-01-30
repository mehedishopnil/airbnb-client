
import { IoIosArrowForward } from "react-icons/io";

const ListingCard = ({ item, index }) => {
    console.log(item.image);
    return(
        <div key={index} className="border rounded border-gray-200 mb-4 md:mb-4 p-4 flex items-center justify-between">
    <div className="flex items-center gap-10">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          {/* Set the image from the data */}
          <img src={item.image} alt={`Listing ${index + 1}`} />
        </div>
      </div>
      <div className=" ">
        <p className="font-semibold  ">{item.name}</p>
        <p>{item.description}</p>
      </div>
    </div>
    <button className="btn btn-ghost btn-xs"><IoIosArrowForward /></button>
  </div>
    )
}



export default ListingCard;
