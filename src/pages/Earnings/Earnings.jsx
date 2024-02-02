import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Earnings = () => {
  const { earningList } = useContext(AuthContext);
  const [yearlyEarnings, setYearlyEarnings] = useState([]);

  useEffect(() => {
    // Filter and sum earnings for each year across all properties
    const yearlySum = {};

    earningList.forEach((property) => {
      Object.entries(property.earnings).forEach(([year, amount]) => {
        yearlySum[year] = (yearlySum[year] || 0) + amount;
      });
    });

    // Convert the yearly sum into an array of objects
    const yearlyEarningsArray = Object.entries(yearlySum).map(([year, amount]) => ({
      year,
      amount,
    }));

    // Set the state with the calculated yearly earnings
    setYearlyEarnings(yearlyEarningsArray);
  }, [earningList]);

  return (
    <div className='container mx-auto my-14'>
      <h3 className='text-2xl font-semibold uppercase text-center my-8'><span className='font-bold'>Yearly</span> Earnings Chart</h3>
      <div className="w-full md:w-9/12 mx-auto">
        {yearlyEarnings.length > 0 && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={yearlyEarnings}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Earnings;
