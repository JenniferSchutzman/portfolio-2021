import React from 'react'
import HeaderSecondary from '../../components/header-secondary'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Cards from '../../components/cards'

import { cardData } from './tech-com-data'

const TechCommunity= () => {
    const headerDescription = "Since the very beginning I've been trying to soak it all up like a sponge in every direction.  Whether it's conferences, trainings, meetups or happy hours, I'm always looking for new inspiration and teachers."
    const cardDescription = "More than a 'nine-to-five' kind of life"

    return (
        <>
        <Navbar />
        <HeaderSecondary 
            title="Code Immersion"
            subtitle="is not one man behind a screen"
            description={headerDescription}
            img="/images/assisi.jpg"
        />
        <Cards title="Living and breathing tech" description={cardDescription} cardData={cardData} />
        <Footer />
        </>
    )
}

export default TechCommunity; 