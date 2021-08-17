import React from "react";
import PageLayout from "../../components/PageLayout";
import NavBar from "../../components/NavBar";
import myCodeData from "./code.data.js";
import Footer from '../../components/Footer'

const MyCode = (props) => {
  return (
    <>
      <NavBar
        title="My Code"
        subtitle="Professional and personal coding experience"
      />
      <PageLayout data={myCodeData} />
      <Footer />
    </>
  );
};

export default MyCode;
