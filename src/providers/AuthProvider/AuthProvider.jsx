import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const [hotelListData, setHotelListData] = useState([]);
  const [earningList, setEarningList] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://airbnb-server-theta.vercel.app/hotelData');
        if (!response.ok) {
          throw new Error(`Error fetching hotelData.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setHotelData(data);
      } catch (error) {
        console.error('Error fetching hotelData.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, []);

  useEffect(() => {
    const fetchHotelListData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://airbnb-server-theta.vercel.app/hotelListData');
        if (!response.ok) {
          throw new Error(`Error fetching hotelListData.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setHotelListData(data);
      } catch (error) {
        console.error('Error fetching hotelListData.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelListData();
  }, []);

  
  useEffect(() => {
    const fetchEarningList = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/earningList');
        if (!response.ok) {
          throw new Error(`Error fetching hotelListData.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setEarningList(data);
      } catch (error) {
        console.error('Error fetching hotelListData.json:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEarningList();
  }, []);

  useEffect(() => {
    const createUser = () => {
      const user = "Mehedi Hasan";
      setUser(user);
    };

    // Create user after fetching both hotelData and hotelListData
    if (loading) {
      createUser();
    }
  }, [loading]);

  const authInfo = {
    user,
    hotelData,
    hotelListData,
    loading,
    earningList
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
