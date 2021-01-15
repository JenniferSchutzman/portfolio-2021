import React from 'react'
import PageLayout from '../../components/PageLayout'
import NavBar from '../../components/NavBar'
import techCommunityData from './techCommunity.data.js'

const TechCommunity = props => {

  return (
    <>
    <NavBar title="My Code" subtitle="Professional and personal coding experience"/>
    <PageLayout  data={techCommunityData} />
    </>
  )
}

export default TechCommunity;