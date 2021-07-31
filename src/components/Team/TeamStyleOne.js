import React from 'react'
import {Link} from 'gatsby'
import scientist1 from '../../assets/images/scientist/scientist1.png'
import scientist2 from '../../assets/images/scientist/scientist2.png'
import scientist3 from '../../assets/images/scientist/scientist3.png'
import scientist4 from '../../assets/images/scientist/scientist4.png'

const TeamStyleOne = () => {
    return (
        <div className="scientist-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist1} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Liniker</h3>
                                <span>Jedi Iniciado</span>

                                <ul className="social">
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist2} alt="about" />
                            </div>
                            <div className="content">
                                <h3>João Pedro</h3>
                                <span>Jedi Padawan</span>

                                <ul className="social">
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist3} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Marta</h3>
                                <span>Jedi Cavaleiro</span>

                                <ul className="social">
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist4} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Paulo</h3>
                                <span>Jedi Mestre</span>

                                <ul className="social">
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeamStyleOne
