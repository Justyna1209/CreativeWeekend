import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            img:<i className="fas fa-align-center"></i>
        }
    }

    show = () => {
        this.setState({
            display: !this.state.display,
            img:<i className="fas fa-times"></i>
        })
    };

    render() {

        const hamburger =

            <div className="hamburger">
                <ul className="list">
                    <li><NavLink to="/about/us" className="links1">O nas</NavLink></li>
                    <li><NavLink to="/about/mountain" className="links1">Góry</NavLink></li>
                    <li><NavLink to="/about/sea" className="links1">Morze</NavLink></li>
                    <li><NavLink to="/about/city" className="links1">Miasta małe i duże</NavLink></li>
                    <li><NavLink to="/contact" className="links1">Kontakt z Nami :)</NavLink></li>
                </ul>
            </div>;

        return (
            <div className="position" >
                <i onClick={this.show} className="fas fa-align-center"></i>
                {this.state.display ? hamburger : null}
            </div>
        );
    }
}

export default MobileMenu