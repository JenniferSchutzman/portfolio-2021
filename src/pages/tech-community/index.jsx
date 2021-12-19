import React from 'react'
import HeaderSecondary from '../../components/header-secondary'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Cards from '../../components/cards'

import { cardData } from './tech-com-data'

const TechCommunity= () => {
    const headerDescription = ""
    const cardDescription = ""

    return (
        <>
        <Navbar />
        <HeaderSecondary 
            title="Code Immersion"
            subtitle="is not one man behind a screen"
            description={headerDescription}
            img="/images/assisi.jpg"
        />
        <Cards title="Delta Platinum Life" description={cardDescription} cardData={cardData} />
        <Footer />
        </>
    )
}

export default TechCommunity; 