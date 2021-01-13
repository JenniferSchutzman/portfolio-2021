import React from 'react'
import PageLayout from '../../components/PageLayout'
import NavBar from '../../components/NavBar'
import formerLifeData from './formerLife.data.js'


const FormerLife = props => {

console.log("formerLifeData", formerLifeData)

  return (
    // <h1>Former Life</h1>
    <>
    <NavBar title="Former Life" subtitle="blah blah blah"/>
    <PageLayout  data={formerLifeData} />
    </>
  )
}

export default FormerLife;  