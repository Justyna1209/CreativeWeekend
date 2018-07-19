import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import CrazyDiv from "./crazydiv.js";

class WhatDirection extends React.Component{
    render(){
        return(
            <div className="squareDiv container">
                <div className="img1 square">
                    <span><NavLink to="/about/mountain" className="links">Góry</NavLink></span>
                </div>
                <div className="img2 square1">
                    <span><NavLink to="/about/sea" className="links">Morze</NavLink></span>
                </div>
                <div className="img3 square">
                    <span><NavLink to="/about/city" className="links">Duże miasta</NavLink></span>
                </div>
                <div className="img4 square1">
                    <span><NavLink to="/about/mountain" className="links">Małe miasta</NavLink></span>
                </div>
                <CrazyDiv/>
            </div>
        )
    }
}

export default WhatDirection