import React, { Component } from 'react';
import
{
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Header from './components/header.js'
import AboutUs from './components/aboutUs.js';
import Mountain from './components/mountains.js'
import Sea from './components/see.js'
import City from './components/citytown.js'
import Contact from './components/contact.js'
import AboutPoland from './components/poland.js';
import WhatDirection from './components/direction.js';
import NoIdeaa from './components/noidea.js';
import FirstTrip from './components/city.js';
import Footer from './components/footer.js'

// import { findDOMNode } from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <main>
                        <Route path="/" exact component={Header}/>
                        <Route path="/about/us" component={AboutUs}/>
                        <Route path="/about/mountain" component={Mountain}/>
                        <Route path="/about/sea" component={Sea}/>
                        <Route path="/about/city" component={City}/>
                        <Route path="/" exact component={AboutPoland}/>
                        <Route path="/" exact component={WhatDirection}/>
                        <Route path="/" exact component={NoIdeaa}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about/yourIdea" component={FirstTrip}/>
                    <Footer/>
                </main>
            </HashRouter>
        )
    }
}

export default App;
