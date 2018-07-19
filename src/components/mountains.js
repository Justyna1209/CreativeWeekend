import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Mountain extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <div className="heading"><p className='p'>Witaj na naszym blogu ;)</p></div>
                <p>Strona w realizacji - zapraszamy wkrótce</p>
            </div>
        )
    }
}

export default Mountain