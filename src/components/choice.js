import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import cities from "../data";

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arrayLink: <div className="number"><span className="span1">Twój pomysł</span></div>,
            color:"blue"
        };
        console.log(cities)
    };

    changeNumber = () => {
        const tab=cities.map(e=><div className="number">{e.img}<span>{e.city}</span></div> );

        this.setState({
            arrayLink: tab[Math.ceil(Math.random() * tab.length - 1)],
            color:"white"
        })
    };

    render(){

        return (
            <div className="game">
                <NavLink to="/about/yourIdea" className="links1">
                    <div className="number">{this.state.img}<span>{this.state.arrayLink}</span></div>
                </NavLink>
                <button onClick={this.changeNumber}>Wylosuj pomysł</button>
            </div>
        )
    }
}

export default Game