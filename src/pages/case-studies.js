import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import TwoColumns from '../components/Studies/TwoColumns'

// Functional component
const CaseStudies = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Projetos" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Projetos" 
            />
           <TwoColumns />
            <Footer />
        </Layout>
    );
}

export default CaseStudies