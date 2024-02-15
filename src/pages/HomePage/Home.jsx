import React from "react";
import {
  homePage,
  productsPage,
  signUpPage,
  fourthElement,
} from "../../services/Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homePage} />
      <InfoSection {...productsPage} />
      <InfoSection {...signUpPage} />
      <Pricing />
      <InfoSection {...fourthElement} />
    </>
  );
};

export default Home;
