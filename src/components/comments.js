import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class FormExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ''};
    }
    handleNameChange = (event) => {
        const name = event.target.value.replace(/\d/g, '');
        this.setState({
            name: name
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Your name is '
            + this.state.name);
    };
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"
                               value={this.state.name}
                               onChange={this.handleNameChange}
                        />
                    </label>
                    <input type="submit" value="Submit"  />
                    <div>
                        <h1>Imię: {this.state.name}</h1>
                    </div>
                </form>;
            </div>
        )
    }
}

export default FormExample