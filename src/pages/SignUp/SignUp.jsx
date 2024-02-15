import React from "react";
import { signUpPage, fourthElement } from "../../services/Data";
import { InfoSection, Pricing } from "../../components";

const SignUp = () => {
  return (
    <>
      <InfoSection {...signUpPage} />
      <Pricing />
      <InfoSection {...fourthElement} />
    </>
  );
};

export default SignUp;
