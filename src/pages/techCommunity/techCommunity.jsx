import React from "react";
import PageLayout from "../../components/PageLayout";
import NavBar from "../../components/NavBar";
import techCommunityData from "./techCommunity.data.js";
import Footer from '../../components/Footer'

const TechCommunity = (props) => {
  return (
    <>
      <NavBar
        title="Tech Community"
        subtitle="My active and consistant involvement with the Charleston Tech Community"
      />
      <PageLayout data={techCommunityData} />
      <Footer />
    </>
  );
};

export default TechCommunity;
