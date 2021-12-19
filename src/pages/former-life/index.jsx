import React from 'react'
import HeaderSecondary from '../../components/header-secondary'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Cards from '../../components/cards'

import { cardData } from './former-life-data'

const FormerLife = () => {
    const headerDescription = "10+ years working for international non-profits with Data Monitoring and Evaluation"
    const cardDescription = "Click on links to learn more about work in 12+ countries"

    return (
        <>
        <Navbar />
        <HeaderSecondary 
            title="Living to the Fullest"
            subtitle="every phase of the journey"
            description={headerDescription}
            img="/images/columns.jpg"
        />
        <Cards title="Delta Platinum Life" description={cardDescription} cardData={cardData} />
        <Footer />
        </>
    )
}

export default FormerLife; 