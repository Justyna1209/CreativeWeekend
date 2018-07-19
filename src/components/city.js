import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import MoveDescription from "./poznan.js";
import MainMapComponent from "./map.js";


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

                </div>

                <MoveDescription/>
                <MainMapComponent/>

            </div>
        )
    }
}

export default FirstTrip