import React from "react";
import PageLayout from "../../components/PageLayout";
import NavBar from "../../components/NavBar";
import myCodeData from "./code.data.js";

const MyCode = (props) => {
  return (
    <>
      <NavBar
        title="My Code"
        subtitle="Professional and personal coding experience"
      />
      <PageLayout data={myCodeData} />
    </>
  );
};

export default MyCode;
