import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import icon1 from '../../assets/images/services/adestec.png'
import icon2 from '../../assets/images/services/eletronop.png'
import icon3 from '../../assets/images/services/zepelim-icone.png'
import icon4 from '../../assets/images/services/service-icon4.png'
import icon5 from '../../assets/images/services/service-icon5.png'
import icon6 from '../../assets/images/services/service-icon6.png'
import shape1 from '../../assets/images/services/service-shape1.png'
import shape2 from '../../assets/images/services/service-shape2.png'

const OurServices = () => {
    return (
        <section className="services-area ptb-100 bg-e3fbff">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="image" /> 
                        Apoiadores
                    </span>
                    <h2>Nosso espaço só existe devido a nossos apoiadores!
                    </h2>
                    <p>Promover conhecimento para todos é nossa principal missão, e contamos com nossos padrinhos para realizar essa tarefa.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src={icon1} alt="image" />
                            </div>
                            <h3>
                                <Link to="https://adestec.org.br/">
                                    Adestec Obra Padre Pio
                                </Link>
                            </h3>
                            <p><h2>Padrinho</h2></p>
                                
                            <Link to="https://adestec.org.br/" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Site <span></span>
                            </Link>

                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src={icon2} alt="image" />
                            </div>
                            <h3>
                                <Link to="https://www.facebook.com/eletronop.materiaiseletricos/">
                                    Eletronop
                                </Link>
                            </h3>
                            <p><h2>Padrinho</h2></p>

                            <Link to="https://www.facebook.com/eletronop.materiaiseletricos/" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Site <span></span>
                            </Link>
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src={icon3} alt="image" />
                            </div>
                            <h3>
                                <Link to="https://zepelim.netlify.app/">
                                    Zepelim Fábrica de Software
                                </Link>
                            </h3>
                            <p><h2>Padrinho</h2></p>
                            
                            <Link to="https://zepelim.netlify.app/" className="default-btn">
                                <i className="flaticon-right"></i> 
                                Site <span></span>
                            </Link>
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="load-more-btn text-center">
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfdAqPwTrA9K63HhPIUSjnnDNyGk9lN12YMUKK9nKqR6qsiyg/viewform?usp=sf_link" className="default-btn">
                                <i className="flaticon-money"></i> 
                                Torne-se um Apoiador <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices