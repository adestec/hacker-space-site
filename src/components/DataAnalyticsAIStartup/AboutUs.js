import React from 'react'
import { Link } from 'gatsby'
import img10 from '../../assets/images/about/about-img10.png'
import shape1 from '../../assets/images/about/about-shape1.png'
import shape2 from '../../assets/images/our-mission/our-mission-shape2.png'
import starIcon from '../../assets/images/star-icon.png'

const AboutUs = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={img10} alt="banner" />
                            <div className="shape">
                                <img src={shape1} alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    Sobre o Hacker Space
                                </span>
                                <h2>Equipamentos disponiveis para comunidade e startups</h2>
                                <p>Contamos com uma gama completa de equipamentos para prototipação, testes, e criação.</p>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Impressora 3D
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Kits de Robótica
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Kits Lora
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Kits IOT
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Raspberrys PI 4
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Cloud Computing
                                        <img src={shape2} alt="banner" />
                                    </li>
                                </ul>
                                <p>Nossa estrutura é de uso gratuito, e para que isso seja possivel nós contamos com a ajuda de todos os participantes!</p>
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    + Informações <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs