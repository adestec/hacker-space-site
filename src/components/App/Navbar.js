import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link
                                to="/"
                                onClick={() => setCollapsed(true)}
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Home <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Página Inicial
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link */}
                                    {/*        to="#" */}
                                    {/*        activeClassName="active"*/}
                                    {/*        onClick={e => e.preventDefault()}*/}
                                    {/*        className="nav-link"*/}
                                    {/*    >*/}
                                    {/*        Sobre <i className='bx bx-chevron-down'></i>*/}
                                    {/*    </Link>*/}
                                    {/*    */}
                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link */}
                                    {/*                to="/history" */}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Adestec*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Apoiadores <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/services"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   Nossos Apoiadores
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link*/}
                                    {/*        to="#"*/}
                                    {/*        activeClassName="active"*/}
                                    {/*        onClick={e => e.preventDefault()}*/}
                                    {/*        className="nav-link"*/}
                                    {/*    >*/}
                                    {/*        Projetos <i className='bx bx-chevron-down'></i>*/}

                                    {/*    </Link>*/}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/case-studies"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Comunidade*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                                <Link
                                                    to="/membership-levels"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Planos
                                                </Link>
                                            </li>

                                    {/*<li className="nav-item">*/}
                                    {/*    <Link*/}
                                    {/*        to="#"*/}
                                    {/*        activeClassName="active"*/}
                                    {/*        onClick={e => e.preventDefault()}*/}
                                    {/*        className="nav-link"*/}
                                    {/*    >*/}
                                    {/*        Agenda <i className='bx bx-chevron-down'></i>*/}
                                    {/*    </Link>*/}

                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        /!*<li className="nav-item">*!/*/}
                                    {/*        /!*    <Link*!/*/}
                                    {/*        /!*        to="#"*!/*/}
                                    {/*        /!*        activeClassName="active"*!/*/}
                                    {/*        /!*        onClick={e => e.preventDefault()}*!/*/}
                                    {/*        /!*        className="nav-link"*!/*/}
                                    {/*        /!*    >*!/*/}
                                    {/*        /!*        Cursos <i className='bx bx-chevron-down'></i>*!/*/}
                                    {/*        /!*    </Link>*!/*/}

                                    {/*        /!*    <ul className="dropdown-menu">*!/*/}
                                    {/*        /!*        <li className="nav-item">*!/*/}
                                    {/*        /!*            <Link*!/*/}
                                    {/*        /!*                to="/courses"*!/*/}
                                    {/*        /!*                activeClassName="active"*!/*/}
                                    {/*        /!*                onClick={() => setCollapsed(true)}*!/*/}
                                    {/*        /!*                className="nav-link"*!/*/}
                                    {/*        /!*            >*!/*/}
                                    {/*        /!*                Cursos e Certificações*!/*/}
                                    {/*        /!*            </Link>*!/*/}
                                    {/*        /!*        </li>*!/*/}
                                    {/*        /!*    </ul>*!/*/}
                                    {/*        /!*</li>*!/*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="#"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={e => e.preventDefault()}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Eventos <i className='bx bx-chevron-down'></i>*/}
                                    {/*            </Link>*/}

                                    {/*            <ul className="dropdown-menu">*/}
                                    {/*                <li className="nav-item">*/}
                                    {/*                    <Link*/}
                                    {/*                        to="/events"*/}
                                    {/*                        activeClassName="active"*/}
                                    {/*                        onClick={() => setCollapsed(true)}*/}
                                    {/*                        className="nav-link"*/}
                                    {/*                    >*/}
                                    {/*                        Eventos Abertos*/}
                                    {/*                    </Link>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link*/}
                                    {/*        to="#"*/}
                                    {/*        activeClassName="active"*/}
                                    {/*        onClick={e => e.preventDefault()}*/}
                                    {/*        className="nav-link"*/}
                                    {/*    >*/}
                                    {/*        +Informações <i className='bx bx-chevron-down'></i>*/}
                                    {/*    </Link>*/}

                                    {/*    <ul className="dropdown-menu">*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/contact"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Contato*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/gallery"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Galeria*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/faq"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                FAQ*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/privacy-policy"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Regras*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}

                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link*/}
                                    {/*                to="/terms-of-service"*/}
                                    {/*                activeClassName="active"*/}
                                    {/*                onClick={() => setCollapsed(true)}*/}
                                    {/*                className="nav-link"*/}
                                    {/*            >*/}
                                    {/*                Termos de Responsabilidade*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}


                                    {/* <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Blog <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/blog"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Postagens
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <Link
                                            to="https://docs.google.com/forms/d/e/1FAIpQLSeMvU8KNu4MvPiL7013mRwtoXDstFZonpscgCS0yQhJqTD_vw/viewform?usp=sf_link"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Inscrever-se <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
