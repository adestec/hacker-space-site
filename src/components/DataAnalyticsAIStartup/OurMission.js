import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import shape1 from '../../assets/images/our-mission/our-mission-shape1.png'
import shape2 from '../../assets/images/our-mission/our-mission-shape2.png'
import mission1 from '../../assets/images/our-mission/our-mission1.png'

const OurMission = () => {
    return (
        <section className="our-mission-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> Nossa Missão
                                </span>
                                <h2>Desenvolvimento através da prática!</h2>
                                <p>Nosso objetivo é unir a comunidade através da tecnologia, poder ajudar e inspirar as novas gerações a criarem coisas fantásticas!</p>
                                <ul className="our-mission-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Ambiente Seguro
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Interação com Comunidade
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Projetos
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Mentorias
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Palestras
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Diversão
                                        <img src={shape2} alt="banner" />
                                    </li>
                                </ul>
                                <p>Se torne um membro de nossa comunidade!.</p>
                                
                                <Link to="https://forms.gle/vH6YvmtNa4JsE7QK9" className="default-btn">
                                    <i className="flaticon-right"></i>
                                    Inscrição
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                            <img src={mission1} alt="banner" />
                            <div className="shape">
                                <img src={shape1} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission