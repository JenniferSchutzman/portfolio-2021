import React from "react";
import PageLayout from "../../components/PageLayout";
import NavBar from "../../components/NavBar";
import techCommunityData from "./techCommunity.data.js";

const TechCommunity = (props) => {
  return (
    <>
      <NavBar
        title="Tech Community"
        subtitle="My active and consistant involvement with the Charleston Tech Community"
      />
      <PageLayout data={techCommunityData} />
    </>
  );
};

export default TechCommunity;
