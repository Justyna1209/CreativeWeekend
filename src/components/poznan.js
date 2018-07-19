import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import AboutUs from "./aboutUs";

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
            <div style={{paddingBottom:"15px"}}>
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
                        <a className="a" href="http://rogalowemuzeum.pl/">Więcej informacji</a>
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
                        <a className="a" href="http://www.poznan.pl/mim/turystyka/trasa-2-stare-miasto,p,661,22074,22076.html">Więcej informacji</a>
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
                        <p className="plan">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facere incidunt nam perferendis perspiciatis soluta voluptate. Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.Accusamus adipisci dolore eaque et exercitationem ipsam nisi rem voluptas. Animi aspernatur dignissimos eum ipsa mollitia non odit, perspiciatis quam tenetur voluptates? Accusamus aliquam aspernatur, aut blanditiis cumque debitis delectus eos facilis fuga fugiat id libero magni mollitia necessitatibus nemo neque nobis obcaecati odio odit perferendis praesentium quas rem repellat reprehenderit repudiandae sit totam. Accusantium ad alias, aliquam blanditiis consequatur dolorem, earum, eligendi esse fugit in labore laboriosam laborum quod quos repudiandae voluptatem voluptatum! Aliquid esse fugiat, necessitatibus nesciunt non placeat sunt voluptates. Alias corporis distinctio doloribus ducimus.
                        </p>
                        <a className="a" href="https://www.muzarp.poznan.pl/">Więcej informacji</a>
                    </div>


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
                        <a className="a" href="http://www.katedra.archpoznan.pl/historia-katedry-poznanskiej/">Więcej informacji</a>
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
                            <img src="https://i.ytimg.com/vi/_zs2Dt7uUP4/maxresdefault.jpg" style={{width:"100%" , height:"300px"}}></img>
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
                        <a className="a" href="http://bramapoznania.pl/">Więcej informacji</a>
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
                        <a className="a" href="http://www.zoo.poznan.pl/">Więcej informacji</a>
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
                        <a className="a" href="http://ckzamek.pl/">Więcej informacji</a>
                    </div>

                    <h5>8. Pozostałe atrakcje w Poznaniu</h5>
                    <div className="mainPolaroid">
                        <p className="plan">
                            Poznań to jedno z piękniejszych miast Polski, choć wydaje się być niedoceniony jeszcze przez turystów. Warto tu zagościć chociaż na weekend. Jak widzicie atrakcji tutaj nie brakuje ;), a to tylko mała garstka tego co możecie tu zobaczyć. Jeśli macie ochotę na więcej poniżej znajdują się pozostałe niemniej piękne i ciekawe miejsca, które warto zobaczyć.
                        </p>
                        <a className="a" href="http://www.palmiarnia.poznan.pl/pl/">Palmiarnia Poznań</a>
                        <a className="a "href="http://www.ogrodyzoologiczne.pl/stare-zoo-w-poznaniu.php">Stare ZOO</a>
                        <a className="a" href="https://opera.poznan.pl/pl/">Teatr Wielki</a>
                        <a className="a" href="http://www.poznan.pl/mim/turystyka/parki,poi,3338/park-cytadela,51946.html">Cytadela</a>
                        <a className="a" href="http://twierdza.poznan.pl/">Twierdza Poznań</a>
                        <a className="a" href="https://www.starybrowar5050.com/">Stary Browar</a>
                    </div>
                    <span onClick={this.hide.bind(this)}><i style={{color:'#3b5998'}} className="fas fa-times-circle"></i></span>
                </div>
            </div>


        )
    }

}

export default MoveDescription