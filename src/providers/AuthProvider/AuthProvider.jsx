import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const [hotelListData, setHotelListData] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      setLoading(true);
      try {
        const response = await fetch('hotelData.json');
        const data = await response.json();
        setHotelData(data);

        // Fetch hotel list data separately
        const listResponse = await fetch('hotelListData.json');
        const listData = await listResponse.json();
        setHotelListData(listData);

        createUser();
      } catch (error) {
        console.error('Error fetching JSON:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    const createUser = () => {
      const user = "Mehedi Hasan";
      setUser(user);
    };

    // Fetch hotel data and hotel list data, and create user on mount
    fetchHotelData();
  }, []);

  const authInfo = {
    user,
    hotelData,
    hotelListData,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
