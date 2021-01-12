import React from 'react'
import PageLayout from '../../components/PageLayout'
import aboutMeData from './aboutMe.data.js'
import NavBar from '../../components/NavBar'
// console.log('aboutMeData', aboutMeData)

const AboutMe = props => {
  return (
    <>
    <NavBar title="Title" subtitle="Subtitle"/>
    <PageLayout  data={aboutMeData}/>
    </>
  )
}

export default AboutMe;