import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

  // Prepare data for the StackedBarChart
  const data = Object.entries(selectedEarning.earnings).map(([year, amount]) => ({
    name: year,
    PaidOut: amount,
    Expected: amount, // Assuming you want both 'pv' and 'uv' to have the same values
  }));

  // Calculate total amounts for 'PaidOut' and 'Expected'
  const totalPaidOut = data.reduce((sum, entry) => sum + entry.PaidOut, 0);
  const totalExpected = data.reduce((sum, entry) => sum + entry.Expected, 0);

  return (
    <div className="my-5">
      <div className="flex flex-col justify-center items-center">
       <div className="md:w-8/12 w-full">
         {/* StackedBarChart */}
         <ResponsiveContainer width="90%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20, // Increased bottom margin for the label
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PaidOut" stackId="a" fill="#8884d8" />
            <Bar dataKey="Expected" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       </div>
        {/* Total amount display */}
        <div className="md:flex gap-5 mt-4">
          <h2 className="text-2xl font-semibold text-[#8884d8]">Total Paid Out: ${totalPaidOut}</h2>
          <h2 className="text-2xl font-semibold text-[#82ca9d]">Total Expected: ${totalExpected}</h2>
        </div>
      </div>
    </div>
  );
};

export default IndividualEarnings;
