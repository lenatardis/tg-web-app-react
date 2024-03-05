import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
    return (
        <div className="inner-wrap">
            <Outlet />
            <Navigation />
        </div>
    );
};

export default Layout;
