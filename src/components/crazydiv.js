import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class CrazyDiv extends React.Component{
    constructor (props){
        super(props);
        this.state={
            name:'Lasy i jeziora'
        }
    }

    changeposition=()=>{
        this.setState({
            name:'Ruszaj w drogę :)'
        })
    };

    changeposition1=()=>{
        this.setState({
            name:'Lasy i jeziora'
        })
    };

    render(){
        return(
            <div className="img5 square" onMouseEnter={this.changeposition} onMouseLeave={this.changeposition1}>

                <span style={{fontSize:'40px' ,textAlign:'center'}}>{this.state.name} {this.state.width} {this.state.height}</span>
            </div>
        )
    }
}

export default CrazyDiv