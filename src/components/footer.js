import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="contactAuthor container">
                    <h4>Kontakt z autorem</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sunt.:)</p>
                    <button>Klik</button>
                </div>
                {/*<FormExample />*/}
                <div className="footer">
                    <div className="media facebook"><i className="fab fa-facebook-f" ></i></div>
                    <div className="media twitter"><i className="fab fa-twitter"></i></div>
                    <div className="media linkedin"><i className="fab fa-linkedin-in"></i></div>
                    <div className="media instagram"><i className="fab fa-instagram"></i></div>
                </div>
                <div className="endFooter">
                    <p> Pomysł na weekend Blog. Wszelkie prawa zastrzeżone &copy; 2018</p>
                </div>
            </div>
        )
    }
}

export default Footer