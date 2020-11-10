import React from 'react'
import {Link} from 'gatsby'
import icon1 from '../../assets/images/services/adestec.png'
import icon2 from '../../assets/images/services/eletronop.png'
import icon3 from '../../assets/images/services/zepelim-icone.png'

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
            <div>
              <ul>
                <h2>Padrinhos</h2>
                <p></p>
              </ul>
              </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={icon1} alt="image" />
                            </div>
                            <h3>
                                <Link to="https://adestec.org.br/">
                                 Adestec Obra Padre Pio
                                </Link>
                            </h3>
                            <p>Descrição</p>

                            <Link className="view-details-btn" to="https://adestec.org.br/">
                                Site
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={icon2} alt="image" />
                            </div>
   
                            <h3>
                                <Link to="https://www.facebook.com/eletronop.materiaiseletricos/">
                                 Eletronop
                                </Link>
                            </h3>

                            <p>Descrição.</p>
                            
                            <Link className="view-details-btn" to="https://www.facebook.com/eletronop.materiaiseletricos/">
                                Site
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={icon3} alt="image" />
                            </div>

                            <h3>
                                <Link to="www.zepelim.dev">
                                Zepelim Fábrica de Software
                                </Link>
                            </h3>

                            <p>Uma fábrica de software focada no produto, que tem muito orgulho de investir na comunidade Sinopense.</p>
                            
                            <Link className="view-details-btn" to="www.zepelim.dev">
                                Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne