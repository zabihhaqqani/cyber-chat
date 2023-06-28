import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const RequiresAuth = ({children}) => {
    let location = useLocation()
    const {localStorageData} = useAuthContext()
  return localStorageData ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default RequiresAuth;