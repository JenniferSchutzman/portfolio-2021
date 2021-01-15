import React from 'react'
import PageLayout from '../../components/PageLayout'
import NavBar from '../../components/NavBar'
import myCodeData from './code.data.js'

const MyCode = props => {

  return (
    <>
    <NavBar title="My Involvement with the Charleston Tech Community"/>
    <PageLayout  data={myCodeData} />
    </>
  )
}

export default MyCode;