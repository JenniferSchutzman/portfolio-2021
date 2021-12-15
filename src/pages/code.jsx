import React from 'react'
import Header from '../components/header'
import Cards from '../components/cards'
import Footer from '../components/footer'

const cardData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        category: "Fullstack Software Engineer",
        title: "RateQuote",
        description: "I will put a description of RateQuote here and the work I do"
    }
]

const Code = () => {
    return (
        <>
            <Header />
            <Cards title="Software Development Experience" description="Click on the links to see the end product of the work" cardData={cardData}/>
            <Footer />
        </>
    )
}

export default Code;