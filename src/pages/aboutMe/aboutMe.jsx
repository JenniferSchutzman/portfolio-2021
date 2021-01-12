import React from 'react'
import PageLayout from '../../components/PageLayout'
import aboutMeData from './aboutMe.data.js'

// console.log('aboutMeData', aboutMeData)

const AboutMe = props => {
  return (
    <>
    <h1>Abuot Me</h1>
    <PageLayout  data={aboutMeData}/>
    </>
  )
}

export default AboutMe;