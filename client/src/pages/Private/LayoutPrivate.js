import React from 'react';
import { Outlet } from 'react-router-dom';

// Componentes
import NavigationSideBar from '../../components/Navigation/NavigationSideBar/NavigationSideBar';

// CSS
import './layoutPrivateStyles.scss'

const LayoutPrivate = () => {
    return (       
        <div className="layoutPrivate">
            <div className="profile" style={{display:'flex'}}>
                <NavigationSideBar className="sideBar" />
                <div className="profile-container"><Outlet/></div>
            </div>
        </div>
    );
};

export default LayoutPrivate;