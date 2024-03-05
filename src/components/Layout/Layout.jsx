import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
    return (
        <div>
            <Outlet />
            <Navigation />
        </div>
    );
};

export default Layout;
