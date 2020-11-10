import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>O Adestec Hacker Space é um local criado pela comunidade para comunidade, idealizado e desenvolvido pela Adestec, ele tem como objetivo
                                proporcionar um ambiente de interação, aprendizado, e diversão para toda comunidade.
                            </p>

                            <ul className="social-link">
                                <li>
                                    <Link to="https://www.facebook.com/Adestec" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/adestecobrapadre/" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/about-us">
                                        Parceiros
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-studies">
                                        Projetos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Recursos</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/team">
                                        Our Scientists
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        SaaS Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-studies">
                                        Case Studies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Endereço</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                     Rua dos Coqueiros 1000, Sinop, Mato Grosso, <br /> Brasil
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">(66) 3531-2259</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@rewy.com">informacoes@adestec.com.br</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">(66)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <a target="_blank" href="www.zepelim.dev" rel="noreferrer">Zepelim Fábrica de Software</a></p>
                        </div>

                        {/* <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;