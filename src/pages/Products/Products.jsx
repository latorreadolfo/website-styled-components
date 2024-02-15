import React from "react";
import { productsPage, signUpPage, fourthElement } from "../../services/Data";
import { InfoSection, Pricing } from "../../components";

const Products = () => {
  return (
    <>
      <InfoSection {...productsPage} />
      <InfoSection {...signUpPage} />
      <Pricing />
      <InfoSection {...fourthElement} />
    </>
  );
};

export default Products;
