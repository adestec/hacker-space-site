import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import process7 from '../../assets/images/process/process7.png'
import small1 from '../../assets/images/process/process-small1.png'
import small4 from '../../assets/images/process/process-small4.png'
import small5 from '../../assets/images/process/process-small5.png'
import small6 from '../../assets/images/process/process-small6.png'

const HowItWork = () => {
    return (
        <section className="process-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        Seja um membro!
                    </span>
                    <h2>Roadmap para se tornar um membro.</h2>
                    <p>Se torne um membro ativo da nossa comunidade!</p>
                </div>

                <div className="row align-items-center m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="process-image">
                            <img src={process7} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="process-content">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3>Faça sua inscrição</h3>
                                            <div className="number">1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3>Compareça no Hacker Space</h3>
                                            <div className="number">2</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3>Desenvolva suas Habilidades</h3>
                                            <div className="number">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small4} alt="banner" />
                                            </div>
                                            <h3>Participe de Projetos</h3>
                                            <div className="number">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small5} alt="banner" />
                                            </div>
                                            <h3>Ganhe Pontos</h3>
                                            <div className="number">5</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small6} alt="banner" />
                                            </div>
                                            <h3>Se Divirta!</h3>
                                            <div className="number">6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork