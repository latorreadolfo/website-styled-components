import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
} from "./InfoSection.elements";
import { Container } from "../../globalStyles";

const InfoSection = ({ ligthBg, imgStart }) => {
  return (
    <>
      <InfoSec ligthBg={ligthBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Home Page</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
