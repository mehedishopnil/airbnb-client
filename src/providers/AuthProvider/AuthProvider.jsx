import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('hotelData.json');
        const data = await response.json();
        setHotelData(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    const createUser = () => {
      const user = "Mehedi Hasan";
      setUser(user);
    };

    // Fetch hotel data and create user on mount
    fetchHotelData();
    createUser();
  }, []);

  const authInfo = {
    user,
    hotelData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
