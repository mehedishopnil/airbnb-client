const Cards = ({ data }) => {
    const { id, price, date, location, image } = data;
  
    return (
      <div className="w-[500px] p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">

          {/* Exclude category from displaying */}
          <img src={image} alt={`Image for ${id}`} className="mt-2 w-[450px] h-[300px] rounded-md" />
          <p className="mt-2 text-red-600">Price: {price}</p>
          <p className="mt-2 text-gray-600">Date: {date}</p>
          <p className="mt-2 text-gray-600">Location: {location}</p>
          
        </div>
      </div>
    );
  };
export default Cards;