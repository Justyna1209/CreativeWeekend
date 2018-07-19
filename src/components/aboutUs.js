import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <div className="heading"><p className='p'>Witaj na naszym blogu ;)</p></div>
                <div className="bigboxes">
                    <div className="boxes">
                        <div className="white"><div className='img1AboutUs'></div></div>
                        <div className='img2AboutUs'></div>
                        <div className='img3AboutUs'></div>
                        <div className='img4AboutUs'></div>
                        <div className='img5AboutUs'></div>
                        <div className='img6AboutUs'></div>
                        <div className='img7AboutUs'></div>
                        <div className='img8AboutUs'></div>
                        <div className="white"><div className='img9AboutUs'></div></div>
                    </div>
                    <div className="aboutUs">
                        <p className="descriptionAbout">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad blanditiis commodi consequatur deleniti doloremque dolorum harum itaque iure maiores minima mollitia natus neque nesciunt nihil nisi numquam praesentium, quis quod quos veritatis vero vitae voluptatibus. Adipisci cupiditate doloribus ex nihil nisi nostrum qui quo repellat voluptate. Ab aliquam animi assumenda delectus deserunt dolores eaque ex, impedit inventore ipsa iure nulla perspiciatis rerum vel veritatis vero voluptas. Accusantium aliquid architecto blanditiis commodi consequatur consequuntur cumque deserunt dolorem ducimus eaque earum eius explicabo harum in incidunt iusto mollitia natus nisi nobis omnis provident quae quam, quis reiciendis repudiandae saepe sed sint.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;

