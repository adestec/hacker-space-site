import React from 'react'
import { Link } from 'gatsby'
import icon1 from '../../assets/images/icons/impressora3d.png'
import icon2 from '../../assets/images/icons/arduino.png'
import icon3 from '../../assets/images/icons/cloud.png'
import shape2 from '../../assets/images/services/service-shape2.png'

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src={icon1} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Impressora 3D
                                </Link>
                            </h3>
                            <p>Nosso Hacker Space conta com uma impressora Ender3 e filamentos em PLA para que a comunidade possa tirar os projetos do papel</p>

                            <Link to="/service-details" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Saber Mais <span></span>
                            </Link>

                            <div className="shape1">
                                <img src={shape2} alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src={icon2} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Arduino e IOT
                                </Link>
                            </h3>
                            <p>Kits de eletrônica com arduino para iniciante e avançado estão disponiveis, bem como kits Lora e IOT com Esp32!.</p>
                            
                            <Link to="/service-details" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Saber Mais <span></span>
                            </Link>

                            <div className="shape1">
                                <img src={shape2} alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src={icon3} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Cloud Computing
                                </Link>
                            </h3>
                            <p>Contamos com a ajuda da computação em nuvem para deploy de aplicações e aprendizado de novas tecnologias!</p>
                            
                            <Link to="/service-details" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Saber Mais <span></span>
                            </Link>

                            <div className="shape1">
                                <img src={shape2} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedService