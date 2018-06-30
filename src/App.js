import React, { Component } from 'react';
import cities from './data.js';
import
{
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import { findDOMNode } from 'react-dom';



import {withGoogleMap, GoogleMap, Marker}from "react-google-maps"
const {StandaloneSearchBox}=require("react-google-maps/lib/components/places/StandaloneSearchBox");
// // class Slider extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             img1:<img src="http://www.tapetus.pl/obrazki/n/218519_jezioro-gory-tatry-wysokie-morskie-oko.jpg"/>
// //
// //         };
// //     }
// //     componentDidMount(){
// //         this.timeoutId=setTimeout(()=>{
// //             this.setState({
// //                 img1:<img src="http://thepinesgrantown.co.uk/wp-content/uploads/2015/06/kitzbuheler_horn.jpg"/>
// //
// //             })
// //         },3000)
// //     }
// //     componentWillUnmount(){
// //         clearTimeout(this.timeoutId)
// //     }
// //     render(){
// //         return <div>{this.state.img1}</div>
// //     }
// // }
//
//MoveDescription-wpis o Poznaniu

class MoveDescription extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'none',
        };
    }

    show=()=>{
        this.setState({
            display:'block',
        })
    };

    hide=()=>{
        this.setState({
        display:'none'
    })
    };
    render(){
        return(
            <div>
                <div>
                    <button onClick={this.show} className="see"><span>Zobacz cały wpis o Poznaniu :)</span><span className="arrowDown"></span></button>
                </div>
                <div style={{display:this.state.display}} className=' descriptionPoznan container'>
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda consequuntur dicta distinctio maiores officia repellendus saepe! Adipisci, corporis doloremque explicabo iusto nemo nihil sunt. Animi esse facere quod voluptates.
                    <span onClick={this.hide}><i className="fas fa-times-circle"></i></span>
                </div>

            </div>
        )
    }

}


// MAPA and FIRSTTRIP



class FirstTrip extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left firstTripArrow"></i></NavLink>
            <div className="header1">
                <h1>Poznań</h1>
            </div>
                <div className="container">
                    <div className="aboutPoznan">
                        <h2>Tej Nu Dalij Na Pyrkę :)</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum, eaque enim error eveniet ipsa labore mollitia necessitatibus, quam quisquam quo reiciendis sint ullam? Consequatur, eaque, expedita. Aliquam asperiores beatae consequatur cupiditate, deleniti earum est eum expedita harum, illo inventore iure iusto libero molestiae necessitatibus neque numquam odit perferendis quidem ratione recusandae repellat saepe sed sint sunt ullam veritatis voluptates. Accusantium alias at commodi consequuntur dicta dolore earum et eveniet facere fugit in itaque magnam maiores, officiis omnis quasi qui quidem quo recusandae sed vel, velit vero voluptas, voluptatem voluptatibus. Amet atque consectetur, corporis cupiditate dolor doloremque, ducimus eaque eius esse, et exercitationem expedita facere hic impedit non quae quisquam quo repudiandae sapiente soluta tenetur vel vitae voluptatum? Accusamus adipisci dolorum error esse facilis illum, impedit, incidunt ipsam officia pariatur recusandae.
                    </p>
                    </div>
                </div>
                <h4 className="container" style={{backgroundColor:"#3b5998"}}>Najlepsze atrakcje</h4>
                <div className="whatAdmire container">
                    <div className="container1">
                        <div className="imgPoznan"></div>
                        <div>
                            <div className="overlay1">
                                <div className="text2">
                                    <h4>Poznański Stary Rynek</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, cumque distinctio dolores ex id incidunt ipsa itaque laudantium necessitatibus, nihil recusandae repudiandae sapiente sed suscipit, ut voluptas voluptate. Accusamus ad, aliquid debitis ducimus eius enim.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container1">
                        <div className="imgPoznan2"></div>
                        <div>
                            <div className="overlay1">
                                <div className="text2">
                                    <h4>Katedra Poznańska</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, cumque distinctio dolores ex id incidunt ipsa itaque laudantium necessitatibus, nihil recusandae repudiandae sapiente sed suscipit, ut voluptas voluptate. Accusamus ad, aliquid debitis ducimus eius enim.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container1">
                        <div className="imgPoznan3"></div>
                        <div>
                            <div className="overlay1">
                                <div className="text2">
                                    <h4>Zamek Poznański</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, cumque distinctio dolores ex id incidunt ipsa itaque laudantium necessitatibus, nihil recusandae repudiandae sapiente sed suscipit, ut voluptas voluptate. Accusamus ad, aliquid debitis ducimus eius enim.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container1">
                        <div className="imgPoznan4"></div>
                        <div>
                            <div className="overlay1">
                                <div className="text2">
                                    <h4>Jezioro Maltańskie</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, cumque distinctio dolores ex id incidunt ipsa itaque laudantium necessitatibus, nihil recusandae repudiandae sapiente sed suscipit, ut voluptas voluptate. Accusamus ad, aliquid debitis ducimus eius enim.
                                </div>
                            </div>
                        </div>
                    </div>
                    <MoveDescription/>
                    {/*<button className="see"><span>Zobacz cały wpis o Poznaniu :)</span><span className="arrowDown"></span></button>*/}
                </div>


                <MainMapComponent/>
                <Footer/>
            </div>
        )
    }
}

class MyMapComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap defaultZoom={5}
                       defaultCenter={{lat: 51.9324509, lng: 16.8922361}}
            >
                {this.props.markerShown && <Marker position={{
                    lat:this.props.markerShown[0].geometry.location.lat(),
                    lng:this.props.markerShown[0].geometry.location.lng()
                }}/>}
            </GoogleMap>
        )
    }
}
MyMapComponent=withGoogleMap(MyMapComponent);

class MainMapComponent extends React.Component{
    constructor(){
        super();
        this.state={
            searchBox:false
        }
    }
    componentWillMount(){
        this.refs={
            searchBox:null
        }
    }

    onSearchBoxMounted=(ref, search)=>{
        this.refs[search]=ref;
    };
    onPlacesChanged=(search)=>{
        const places=this.refs[search].getPlaces();

        this.setState({
            [search]:places
        })
    };
    render(){
        console.log(this.state);
        return(
            <div>
                <h4 style={{color:"blue"}}>Przydatne strony</h4>
            <div className="to container">
                <div className="mapInput">
                <StandaloneSearchBox
                ref={ref=>this.onSearchBoxMounted(ref,'searchBox')}
                onPlacesChanged={()=>this.onPlacesChanged('searchBox')}
                >
                <input type='text' placeholder='Wpisz miejscowość' className='input'/>
                </StandaloneSearchBox>


            <MyMapComponent
                markerShown={this.state.searchBox}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` ,width:`500px`}} className="map "/>}
            />
                </div>
                <div className="moreInfoPoznan container">
                    <button className="moreInfo"><a style={{display: "block"}} href="https://maciej.je/na-miescie/poznan/gdzie-zjesc-w-poznaniu-najlepsze-z-najlepszych/" target="_blank">Najlepsze restauracje</a></button>
                    <button className="moreInfo"><a style={{display: "block"}} href="http://www.hotelewpoznaniu.eu/" target="_blank">Baza hoteli Poznań</a></button>
                    <button className="moreInfo"><a style={{display: "block"}}  href="https://jakdojade.pl/poznan/trasa/" target="_blank">Jak poruszać się po mieście</a></button>
                    <button className="moreInfo"><a style={{display: "block"}}  href="http://www.poznan.pl/" target="_blank">Strona miasta</a></button>
                </div>
            </div>
            </div>
        )
    }
}


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
//
//
//
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

class Footer extends React.Component{
     render(){
         return(
             <div>
                 <div className="contactAuthor container">
                     <h4>Kontakt z autorem</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sunt.:)</p>
                     <button>Klik</button>
                 </div>
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


class Article extends React.Component{
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
class Main extends React.Component{
    render(){
        return(
                    <div className="squareDiv container">
            <div className="img1 square">
                <span><NavLink to="/about/mountain" className="links">Góry</NavLink></span>
            </div>
            <div className="img2 square1">
                <span><NavLink to="/about/sea" className="links">Morze</NavLink></span>
            </div>
            <div className="img3 square">
                <span><NavLink to="/about/city" className="links">Duże miasta</NavLink></span>
            </div>
            <div className="img4 square1">
                <span><NavLink to="/about/mountain" className="links">Małe miasta</NavLink></span>
            </div>
            <CrazyDiv/>
        </div>
        )
    }
}

class Section extends React.Component{
    render(){
        return(

            <div className="section container">
                <div>
                  <h2>
                      Polska niezwykła...
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti doloremque esse et, eveniet ex in incidunt ipsam, laborum maxime minima nostrum numquam officiis repellat voluptates? Asperiores dolorem, dolorum ex excepturi, facere fugiat iusto laborum neque nisi nobis officia placeat, quaerat totam? A consectetur distinctio, dolorem dolorum, est excepturi impedit ipsam iure laboriosam magnam molestias pariatur possimus provident sunt ullam. Aliquam assumenda commodi cumque doloribus error, eum itaque officia quia rem, sint tempora voluptate voluptates. Autem earum laboriosam modi nihil quae quis repellat? Delectus in nam quasi quidem reiciendis repellat saepe suscipit. Aspernatur id itaque nisi, numquam quam quia quod voluptatum!
                  </p>
                </div>
            </div>
        )
    }
}


//Pokazywanie sie liter
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


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                {/*<h1>Pomysł na weekend</h1>*/}
                <TextTyper text="Pomysł na weekend..."/>
            </div>

        )
    }
}

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
                <Footer/>
            </div>
        )
    }
}

class Mountain extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <p>Witaj na naszym blogu ;)</p>
            </div>
        )
    }
}

class Sea extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <p>Witaj na naszym blogu ;)</p>
            </div>
        )
    }
}

class City extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <p>Witaj na naszym blogu ;)</p>
            </div>
        )
    }
}

class Contact extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/"><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
                <p>Witaj na naszym blogu ;)</p>
            </div>
        )
    }
}

class MainTemplate extends React.Component{
   render() {
       return (
           <div className="background">
               {this.props.children}
           </div>
       )
   }
}


class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <MainTemplate>
                    <Route path="/" exact component={MobileMenu}/>
                    <Route path="/"  exact component={Header}/>
                    <Route path="/" exact component={Section}/>
                    <Route path="/" exact component={Main}/>
                    <Route path="/" exact component={Article}/>
                    <Route path="/" exact component={Footer}/>
                    <Route path="/about/us" component={AboutUs}/>
                    <Route path="/about/mountain" component={Mountain}/>
                    <Route path="/about/sea" component={Sea}/>
                    <Route path="/about/city" component={City}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about/yourIdea" component={FirstTrip}/>

                </MainTemplate>
            </HashRouter>

        )
    }
}

export default App;
