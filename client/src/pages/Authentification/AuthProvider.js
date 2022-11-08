/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from "react-router-dom";

const AuthProvider = ({children}) => {
    
    const isLogged = false;

    if(!isLogged){

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