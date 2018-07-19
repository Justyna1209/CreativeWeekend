import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import AboutUs from "./aboutUs";
import MobileMenu from './hamburger.js'
import TextTyper from './textTyper.js'


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <MobileMenu/>
                <TextTyper text="Pomysł na weekend..."/>

            </div>

        )
    }
}

export default Header;