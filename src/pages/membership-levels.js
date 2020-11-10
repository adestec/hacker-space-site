import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import {Link} from 'gatsby'

const MembershipLevels = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Planos para Apoiadores" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Planos" 
            />

            <div className="membership-levels-area ptb-100">
                <div className="container">
                    <div className="membership-levels-table table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="price">R$100,00 Mês</span>
                                        <span className="title">Plano Amigo</span>
                                        <span className="desc">Incluso no plano</span>
                                    </th>
                                    <th>
                                        <span className="price">R$200,00 Mês</span>
                                        <span className="title">Plano Parceiro</span>
                                        <span className="desc">Incluso no plano</span>
                                    </th>
                                    <th>
                                        <span className="price">R$300,00 Mês</span>
                                        <span className="title">Plano Padrinho</span>
                                        <span className="desc">Incluso no plano</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Postagens de Acradescimento mês</td>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Prestação de contas mensal
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                           Opcão 2
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Utilização do espaço para treinamento de equipe.
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfdAqPwTrA9K63HhPIUSjnnDNyGk9lN12YMUKK9nKqR6qsiyg/viewform?usp=sf_link" className="select-btn">
                                            Apoiar
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfdAqPwTrA9K63HhPIUSjnnDNyGk9lN12YMUKK9nKqR6qsiyg/viewform?usp=sf_link" className="select-btn">
                                            Apoiar
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfdAqPwTrA9K63HhPIUSjnnDNyGk9lN12YMUKK9nKqR6qsiyg/viewform?usp=sf_link" className="select-btn">
                                            Apoiar
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default MembershipLevels