import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Game from "./choice.js";

class NoIdeaa extends React.Component{
    render(){
        return(
            <div className="article container">
                <div className="description">
                    <h3>Nie masz pomysłu kliknij obok</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem eius maxime rem veniam. Accusantium alias debitis ipsam minima mollitia?
                    </p>
                </div>
                <Game/>
            </div>
        )
    }
}

export default NoIdeaa