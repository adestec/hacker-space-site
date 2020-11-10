import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import scientist9 from '../../assets/images/scientist/scientist9.jpg'
import scientist10 from '../../assets/images/scientist/scientist10.jpg'
import scientist11 from '../../assets/images/scientist/scientist11.jpg'
import shape1 from '../../assets/images/shape/map-shape1.png'
import shape4 from '../../assets/images/shape/vector-shape4.png'
import shape5 from '../../assets/images/shape/vector-shape5.png'

const TeamMembers = () => {
    return (
        <div className="scientist-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="scientist-box-list">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 offset-lg-1">
                                    <div className="single-scientist-item">
                                        <img src={scientist9} alt="banner" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-scientist-item">
                                        <img src={scientist10} alt="banner" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-scientist-item">
                                        <img src={scientist11} alt="banner" />
                                    </div>
                                </div>
                            </div>

                            <div className="map-shape1">
                                <img src={shape1} alt="banner" />
                            </div>
                            <div className="vector-shape5">
                                <img src={shape5} alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="scientist-section-title">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                Nossos Membros!
                            </span>
                            <h2>Conheça um pouco mais sobre nossos membros!</h2>
                            <p>Procure amigos, colaboradores, sócios. Nossos membros são extraordinários e estão dispostos a mudar o mundo.</p>
                            <p></p>

                            <Link to="/team" className="default-btn">
                                <i className="flaticon-view"></i>
                                Ver Membros <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape4">
                <img src={shape4} alt="banner" />
            </div>
        </div>
    )
}

export default TeamMembers