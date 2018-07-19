import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

//MAP
import {withGoogleMap, GoogleMap, Marker}from "react-google-maps"
const {StandaloneSearchBox}=require("react-google-maps/lib/components/places/StandaloneSearchBox");

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

export default MainMapComponent