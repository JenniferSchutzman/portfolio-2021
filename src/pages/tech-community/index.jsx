import React from 'react'
import HeaderSecondary from '../../components/header-secondary'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Cards from '../../components/cards'

import { cardData } from './tech-com-data'

const TechCommunity= () => {
    const headerDescription = "Since the very beginning I've been trying to absorb the knowledge from every direction.  Whether it's conferences, trainings, meetups or happy hours, I'm always looking for new inspiration and teachers beyond what I find alone online."
    const cardDescription = "More than a 'nine-to-five' kind of life"

    return (
        <>
        <Navbar />
        <HeaderSecondary 
            title="Code Immersion"
            subtitle="is not one person at a monitor"
            description={headerDescription}
            img="/images/assisi.jpg"
        />
        <Cards title="Living and breathing tech" description={cardDescription} cardData={cardData} />
        <Footer />
        </>
    )
}

export default TechCommunity; 