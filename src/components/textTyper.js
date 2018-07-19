import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


//Show the letters "Pomysł na weekend"
class TextTyper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.text[0] //pierwsza litera
        };
    }
    componentDidMount(){
        let counter=1;
        this.intervalId=setInterval(()=>{
            if(counter<this.props.text.length){
                this.setState({
                    text: this.state.text + this.props.text[counter]
                });
                counter++;
            }else{
                clearTimeout(this.intervalId)
            }
        },200)
    }

    render(){
        return <h1>{this.state.text}</h1>
    }
}

export default TextTyper;