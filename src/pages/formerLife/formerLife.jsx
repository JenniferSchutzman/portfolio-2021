import React from "react";
import PageLayout from "../../components/PageLayout";
import NavBar from "../../components/NavBar";
import formerLifeData from "./formerLife.data.js";

const FormerLife = (props) => {
  return (
    <>
      <NavBar
        title="Former Life Before Software Development"
        subtitle="10+ Years Working with Non-Profit Data Systems"
      />
      <PageLayout data={formerLifeData} />
    </>
  );
};

export default FormerLife;
