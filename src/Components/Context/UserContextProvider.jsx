import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    const fetchUserData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:5000/user/${userId}`);
            setUserData(response.data);
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetchUserData(userId);
        } else {
            setLoading(false); // Set loading to false if no user ID is found
        }
    }, []);

    const clearUserData = () => {
        setUserData(null);
        localStorage.removeItem('userId');
    };

    useEffect(() => {
        if (!userData) {
            clearUserData();
        }
    }, [userData]);

    const contextValue = {
        userData,
        loading, // Include the loading state in the context
        fetchUserData,
        clearUserData
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
