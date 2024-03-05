import React from 'react';
import './Header.scss';
import {useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    return (
        <div className={'header'}>
           <span onClick = {() => {navigate(-1)}}>Back button</span>
            <span>Text</span>
            <span>Menu button</span>
        </div>
    );
};

export default Header;
