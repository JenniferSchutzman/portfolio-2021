import React from "react";
import PageLayout from "../../components/PageLayout";
import aboutMeData from "./aboutMe.data.js";
import NavBar from "../../components/NavBar";
// console.log('aboutMeData', aboutMeData)

const AboutMe = (props) => {
  return (
    <>
      <NavBar
        title="Who am I and what is it like to work with me?"
        subtitle="A happy, grateful, motivated Software Engineer living in the beautiful town of Mount Pleasant, SC"
      />
      <PageLayout data={aboutMeData} />
    </>
  );
};

export default AboutMe;
