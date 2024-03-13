import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const mainRoute = location.pathname.split('/')[1];
    const noNavBarMainRoutes = ['account', 'verification', 'cvv'];
    const isHomeRoute = location.pathname === '/';
    const showNav = isHomeRoute || !noNavBarMainRoutes.includes(mainRoute);

    return (
        <div className={`inner-wrap ${showNav ? '' : 'no-padding'}`}>
            <Outlet />
            {showNav && <Navigation />}
        </div>
    );
};

export default Layout;
