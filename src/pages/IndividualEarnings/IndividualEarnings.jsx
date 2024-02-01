import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const IndividualEarnings = () => {
  const { earningList } = useContext(AuthContext);
  const { id } = useParams();

  // Convert the id from string to number
  const selectedEarning = earningList.find((item) => item.id === Number(id));

  if (!selectedEarning) {
    // Render a message when matching data is not found
    return (
      <div>
        <h2>Data Not Found</h2>
        <p>No earnings data found for id {id}.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{selectedEarning.name}</h2>
      {/* Display earnings details */}
      <ul>
        {Object.entries(selectedEarning.earnings).map(([year, amount]) => (
          <li key={year}>{`${year}: $${amount}`}</li>
        ))}
      </ul>
      {/* Render other details from selectedEarning */}
      <h2>location</h2>
    </div>
  );
};

export default IndividualEarnings;
