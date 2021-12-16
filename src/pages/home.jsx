import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import IconGrid from '../components/icon-grid'



const Home = () => {
    const personalTraits = [{
        icon: '',
        name: 'Talk Code Everyday',
        description: 'I crave both writing and talking code!  I want to be part of conversations about code technique, project approach, active in stakeholder feedback and tweaking, project planning and retrospectives. '
    },
    {
        icon: '',
        name: 'The Whole Product',
        description: 'Juggling both meetings and private code time excites me because my motivation comes from understanding what the produt is trying to do and how to create the most user-friendly experience.  To me, code vision is inspired through creative converations and bouncing around ideas; then applied one line of code at a time.'
    },
    {
        icon: '',
        name: 'Team First',
        description: `Efficiency and constant growth demands for cohesive communicative teams. I want to soak in all if my teammembers knowledge and keep all of the engine's parts working smoothly while we create a masterpiece (or at least something clean, DRY, and somewhat bug-free!) together.`
    }
]
    
    return (
        <>
            <Header />
            <IconGrid  
                gridData={personalTraits} 
                header="the person"
                title="A different kind of developer"
                titleDescription="Next level products are born from collaboration across avid learners, free thinkerss, and diversity of thought.  I am not looking to repeat what I've already seen, but be the inovator of the new world code."
                />
            <Footer />
        </>
    )
}

export default Home;