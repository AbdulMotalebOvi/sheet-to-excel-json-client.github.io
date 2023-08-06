import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../Components/Context/UserContextProvider';
import Loader from '../../Loader/Loader';



const PrivateRoute = ({ children }) => {
    const { userData, loading } = useUserContext()

    const location = useLocation()
    if (loading) {
        return <Loader />;
    }
    if (userData) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;