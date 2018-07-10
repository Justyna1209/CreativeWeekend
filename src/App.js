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

// const styles= {transition: `all 2s ease-out`};
// class MoveDescription extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             opacity: 0,
//             display:'none'
//         };
//     }
//
//     onShow() {
//         this.setState({
//             opacity:1,
//             display:'block'
//         })
//     }
//     onHide() {
//         this.setState({
//             opacity: 0,
//             display:'none'
//         });
//     }
//
//     render() {
//         return(
//             <div>
//                 <div>
//                     <button onClick={this.onShow.bind(this)} className="see"><span>Zobacz cały wpis o Poznaniu :)</span>
//                         <span className="arrowDown"></span>
//                     </button>
//                 </div>
//             <div style={{...styles, opacity: this.state.opacity}} className="descriptionPoznan container">
//                 >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda consequuntur dicta distinctio maiores officia repellendus saepe! Adipisci, corporis doloremque explicabo iusto nemo nihil sunt. Animi esse facere quod voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda consequuntur dicta distinctio maiores officia repellendus saepe! Adipisci, corporis doloremque explicabo iusto nemo nihil sunt. Animi esse facere quod voluptates.
//                 <span onClick={this.onHide.bind(this)}><i className="fas fa-times-circle"></i></span>
//             </div>;
//
//
//             </div>
//             )
//     }
// }

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
        display:'none',
    })
    };
    render(){
        return(
            <div>
                <div className="container whatAdmire1">
                    <button onClick={this.show.bind(this)} className="see">
                        <span>Zobacz cały wpis o Poznaniu :)</span>
                        <span className="arrowDown"></span>
                    </button>
                </div>
                <div style={{display:this.state.display}} className=' descriptionPoznan container'>
                    <h6>WEEKEND W POZNANIU</h6>
                    <h5>1. Rogalowe muzeum Poznania</h5>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore. Accusamus adipisci amet culpa dolorem dolores dolorum facere facilis illo inventore iste iure molestias, nesciunt nobis nulla perspiciatis provident quibusdam, ratione rerum, sit soluta sunt tempora voluptates. Distinctio obcaecati quae quam. At dolores eaque ex hic odio! Aperiam asperiores dolore numquam obcaecati possimus sint ut vel vitae. Aspernatur dolore ipsam optio quisquam reprehenderit voluptas.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="http://veturo.pl/media/cache/71/e1/71e191854ccaf3b8389a1dd211ad862b.jpg"  style={{width:"100%" ,height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://szok.info.pl/wp-content/gallery/rogalowe-muzeum/dsc_1396.jpg" style={{width:"100%",height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/30261828_771324036397329_4930118707683786752_n.jpg?_nc_cat=0&oh=4b4314ba9b89d25137d209c568b299c9&oe=5BD827A3" style={{width:"100%",height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/1517576_228532930676445_1822693998_n.jpg?_nc_cat=0&oh=15873331e33f5c7a1f08f0546a214e27&oe=5BCFEC40" style={{width:"100%",height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>


                    <h5>2. Poznańskie koziołki w połączeniu ze spacerem po przepięknym starym mieście</h5>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="https://ocdn.eu/pulscms-transforms/1/VOwktkpTURBXy9lY2U1Yjk5YTg5MWVlNWU5ZDJkZWU0N2QwNmY1NjA0Zi5qcGeSlQLNAxQAwsOVAgDNAvjCww"  style={{width:"100%" ,height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="https://images.hintigo.pl/articles/850_400_iStock-521422838-e1488811398315.jpg" style={{width:"100%",height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>

                        <p className="plan">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.
                        </p>
                        <div className="mainPolaroid">
                            <div className="polaroid">
                                <img src="http://metropolia2020.poznan.pl/sites/default/files/programy/rynek.jpg" style={{width:"100%",height:"290px"}}></img>
                                <div className="posen">
                                    <p>Cinque Terre</p>
                                </div>
                            </div>
                            <div className="polaroid">
                                <img src="https://www.readyforboarding.pl/wp-content/uploads/2017/05/bcpoznan-11-201705-readyforboarding_pl.jpg" style={{width:"100%",height:"290px"}}></img>
                                <div className="posen">
                                    <p>Cinque Terre</p>
                                </div>
                            </div>
                        </div>

                    <h5>3. Muzeum Archeologiczne</h5>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/67/22/14/muzeum-archeologiczne.jpg"  style={{width:"100%" ,height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://byway.pl/UploadedImages/D76BB027-5EBD-406B-8F13-0DDFC3C45D35/0e24b150-96a9-443b-894c-df8cc8d0574b.JPG" style={{width:"100%",height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>

                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.
                    </p>



                    <h5>4. Ostrów Tumski</h5>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="http://www.polskiekrajobrazy.pl/images/stories/big/107996poznan.jpg"  style={{width:"100%"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://bort.pl/wp-content/uploads/2015/10/Fotolia_86447957_XS.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore. Accusamus adipisci amet culpa dolorem dolores dolorum facere facilis illo inventore iste iure molestias, nesciunt nobis nulla perspiciatis provident quibusdam, ratione rerum, sit soluta sunt tempora voluptates. Distinctio obcaecati quae quam. At dolores eaque ex hic odio! Aperiam asperiores dolore numquam obcaecati possimus sint ut vel vitae. Aspernatur dolore ipsam optio quisquam reprehenderit voluptas.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid church">
                            <img src="http://2.bp.blogspot.com/-y9ynLrZk0So/U6arRaIa3ZI/AAAAAAAADjI/Pz9Im7aAuNQ/s1600/800px-Pozna%C5%84_Katedra_Podziemia_Grobowiec_Boles%C5%82awa_Chrobrego_RB1.JPG"  style={{width:"100%", height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid church">
                            <img src="http://2.bp.blogspot.com/-3ptoJlwl_LQ/U6aplQf1BoI/AAAAAAAADig/ydoJK-TXXCo/s1600/800px-Katedra_Pozna%C5%84_wn%C4%99trze_RB1.JPG" style={{width:"100%" , height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid church">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Boleslaus_I.jpg" style={{width:"100%" , height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>



                <h5>5. Śródka, a ze Śródki już niedaleko na Maltę :) </h5>
                <div className="mainPolaroid">
                    <div className="polaroid">
                        <img src="https://podrozeodkuchni.pl/wp-content/uploads/2016/02/DSC01691.jpg"  style={{width:"100%"}}></img>
                        <div className="posen">
                            <p>Cinque Terre</p>
                        </div>
                    </div>
                    <div className="polaroid">
                        <img src="https://ocdn.eu/pulscms-transforms/1/ZqEktkpTURBXy81MmFlZDdiNGExNTI4ZmRjN2JkZmQ4MWJlZWQyYjYyOC5qcGeSlQMAFc0D6M0CMpMFzQMgzQHC" style={{width:"100%" , height:"300px"}}></img>
                        <div className="posen">
                            <p>Cinque Terre</p>
                        </div>
                    </div>
                </div>
                <p className="plan">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore. Accusamus adipisci amet culpa dolorem dolores dolorum facere facilis illo inventore iste iure molestias, nesciunt nobis nulla perspiciatis provident quibusdam, ratione rerum, sit soluta sunt tempora voluptates. Distinctio obcaecati quae quam. At dolores eaque ex hic odio! Aperiam asperiores dolore numquam obcaecati possimus sint ut vel vitae. Aspernatur dolore ipsam optio quisquam reprehenderit voluptas.
                </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="http://malta.poznan.pl/wp-content/uploads/2014/07/kapielisko3.jpg"  style={{width:"100%"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://www.maszwolne.pl/photos/objects/2adc867338f92c4cd1b39be453025ac0.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <p className="plan">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa.
                        </p>
                        <div className="polaroid">
                            <img src="http://www.poznan.pl/mim/ezdrowie/pictures/a,pic1,1017,70754,115104,show2.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://www.termymaltanskie.com.pl/wp-content/uploads/2014/03/Aquapark-009.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>


                    <h5>6. Poznańskie Nowe ZOO </h5>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="https://archirama.smcloud.net/s/photos/t/1262/sloniarnia_w_nowym_zoo_w_95592.jpg"  style={{width:"100%", height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="https://i.ytimg.com/vi/oR1FcHyk9Q4/maxresdefault.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>
                    <p className="plan">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore. Accusamus adipisci amet culpa dolorem dolores dolorum facere facilis illo inventore iste iure molestias, nesciunt nobis nulla perspiciatis provident quibusdam, ratione rerum, sit soluta sunt tempora voluptates. Distinctio obcaecati quae quam. At dolores eaque ex hic odio! Aperiam asperiores dolore numquam obcaecati possimus sint ut vel vitae. Aspernatur dolore ipsam optio quisquam reprehenderit voluptas.
                    </p>
                    <div className="mainPolaroid">
                        <div className="polaroid">
                            <img src="http://homeofhouses.com/images/2011/10/32.jpg"  style={{width:"100%", height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://www.fluidi.pl/grafiki/0202/20243_P_927277987.jpg" style={{width:"100%" , height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://www.dioblina.eu/files/dioblina/styles/medium/public/ugl/0/0/1/nowe-zoo-w-poznaniu-43630.jpg" style={{width:"100%" , height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="https://mamnatooko.pl/wp-content/uploads/2016/07/MAMNATOOKO_nowe_zoo_poznan-11.jpg" style={{width:"100%" , height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>


                    <h5>7. Centrum kultury Zamek w Poznaniu </h5>
                    <div className="mainPolaroid">
                        <p className="plan">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus, earum ipsa mollitia nihil quasi quibusdam ratione repudiandae saepe sint sit? Culpa iure obcaecati odit officia unde! At commodi culpa cupiditate dicta, eum harum ipsam itaque iusto laboriosam nisi odit officiis optio perspiciatis praesentium quasi quo reiciendis rem sit tempora tempore. Accusamus adipisci amet culpa dolorem dolores dolorum facere facilis illo inventore iste iure molestias, nesciunt nobis nulla perspiciatis provident quibusdam, ratione rerum, sit soluta sunt tempora voluptates. Distinctio obcaecati quae quam. At dolores eaque ex hic odio! Aperiam asperiores dolore numquam obcaecati possimus sint ut vel vitae. Aspernatur dolore ipsam optio quisquam reprehenderit voluptas.
                        </p>
                        <div className="polaroid">
                            <img src="https://www.pitupitu.pl/files/qN5FVFdP2JUU34Y4iRwKQCJRZdY/coverBig"  style={{width:"100%", height:"290px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                        <div className="polaroid">
                            <img src="http://www.rodzinna-turystyka.pl/militaria-i-fortyfikacje/schrony-bunkry/fortyfikacje-w-polsce/fortyfikacje-niemieckie/images/2-Wnetrza-Zamek-Cesarski-Poznan-05.jpg" style={{width:"100%" , height:"300px"}}></img>
                            <div className="posen">
                                <p>Cinque Terre</p>
                            </div>
                        </div>
                    </div>

                    <h5>8. Pozostałe atrakcje w Poznaniu</h5>
                    <div className="mainPolaroid">
                        <p className="plan">
                            Poznań to jedno z piękniejszych miast Polski, choć wydaje się być niedoceniony jeszcze przez turystów. Warto tu zagościć chociaż na weekend. Jak widzicie atrakcji tutaj nie brakuje ;), a to tylko mała garstka tego co możecie tu zobaczyć. Jeśli macie ochotę na więcej poniżej znajdują się pozostałe niemniej piękne i ciekawe miejsca, które warto zobaczyć.
                        </p>
                        <a href="http://www.palmiarnia.poznan.pl/pl/">Palmiarnia Poznań</a>
                        <a href="http://www.ogrodyzoologiczne.pl/stare-zoo-w-poznaniu.php">Stare ZOO</a>
                        <a href="https://opera.poznan.pl/pl/">Teatr Wielki</a>
                        <a href="http://www.poznan.pl/mim/turystyka/parki,poi,3338/park-cytadela,51946.html">Cytadela</a>
                        <a href="http://twierdza.poznan.pl/">Twierdza Poznań</a>
                        <a href="https://www.starybrowar5050.com/">Stary Browar</a>
                    </div>
                    <span onClick={this.hide.bind(this)}><i style={{color:'#3b5998'}} className="fas fa-times-circle"></i></span>
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

                </div>

                <MoveDescription/>
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
