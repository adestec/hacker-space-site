import React from 'react'
import { Link } from 'gatsby'
import start1 from '../../assets/images/project-start1.png'
import shape3 from '../../assets/images/shape/vector-shape3.png'

const StartProject = () => {
    return (
        <section className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src={start1} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>De um Start em sua StartUp!</h2>
                            <p>Você tem uma ideia de projeto e precisa de ajuda para desenvolve-la?.</p>
                            <p>Traga sua ideia para nosso espaço!</p>
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd92zr9s1frcDHg25B0MXFSDZTrRQWMBPk5Y-a8p5Nw_He_bw/viewform?usp=sf_link" className="default-btn">
                                <i className="flaticon-web"></i> Inscrever-se <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape3} alt="banner" />
            </div>
        </section>
    )
}

export default StartProject