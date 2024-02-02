import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

// Replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  // Add other config options here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
        const response = await fetch('https://airbnb-server-theta.vercel.app/earningList');
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

  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login failed:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
    earningList,
    login,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
