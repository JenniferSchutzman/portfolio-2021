import React from 'react'
import Navbar from '../../components/navbar'
import HeaderSecondary from '../../components/header-secondary'
import Cards from '../../components/cards'
import Footer from '../../components/footer'

import { cardData } from './code-data'


const Code = () => {
    
    const description = " Working for 4 companies and on 10+ projects since the beginning, has allowed me to rapidly push my skills and knowledge on a constant growth trajectory."

    return (
        <>
           <Navbar />
           <HeaderSecondary 
            title="Four Year Code Obsession" 
            subtitle="constantly evolving" 
            description={description} 
            img="/images/books.jpg"
            />
           <Cards title="Software Development Experience" description="Click on the links to see the end product of the work" cardData={cardData}/>
           <Footer />
        </>
    )
}

export default Code;