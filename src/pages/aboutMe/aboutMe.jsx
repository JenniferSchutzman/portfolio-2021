import React from "react";
import PageLayout from "../../components/PageLayout";
import aboutMeData from "./aboutMe.data.js";
import NavBar from "../../components/NavBar";
import Footer from '../../components/Footer'


const AboutMe = (props) => {
  return (
    <>
      <NavBar
        title="Who am I and what is it like to work with me?"
        subtitle="A motivated and grateful Software Engineer living in the alluring Charleston, SC"
      />
      <PageLayout data={aboutMeData} />
      <Footer />
    </>
  );
};

export default AboutMe;
