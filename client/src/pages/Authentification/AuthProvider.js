/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";

import { Navigate } from "react-router-dom";
import { isLogged } from '../../services/profileService';

const AuthProvider = ({children}) => {
<<<<<<< HEAD
 const isLogged = true;
=======
>>>>>>> develop

    const ProfileInfo = useRecoilValue(profileConnexionstate);
    console.log('userInfo dans le auth Provider', ProfileInfo);
    
  //  const isLogged = false;

    if(!ProfileInfo.isLogged){

        return <Navigate to="/login"/>
    }
   
    return children
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
    isLogged: PropTypes.bool,
};
AuthProvider.defaultProps = {};

export default AuthProvider;