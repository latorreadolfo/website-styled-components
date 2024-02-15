import React from "react";
import { fourthElement } from "../../services/Data";
import { InfoSection, Pricing } from "../../components";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...fourthElement} />
    </>
  );
};

export default Services;
