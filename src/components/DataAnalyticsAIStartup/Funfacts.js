import React from 'react'
import icon1 from '../../assets/images/funfacts/fun-icon1.png'
import icon2 from '../../assets/images/funfacts/fun-icon2.png'
import icon3 from '../../assets/images/funfacts/fun-icon3.png'
import icon4 from '../../assets/images/funfacts/fun-icon4.png'

const Funfacts = () => {
    return (
        <div className="funfacts-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6 col-md-4">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon1} alt="banner" />
                            </div>
                            <h3>Infra</h3>
                            <p>Possuimos infra-estrutura completa</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon2} alt="banner" />
                            </div>
                            <h3>20+</h3>
                            <p>Membros da Comunidade</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon3} alt="banner" />
                            </div>
                            <h3>100% Open</h3>
                            <p>Prestação de contas 100% pública</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon4} alt="banner" />
                            </div>
                            <h3>Community</h3>
                            <p>Projetos voltados a comunidade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfacts