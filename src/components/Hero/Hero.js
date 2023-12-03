import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Here is you can find my latest offering and past projects
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:mdaamirkhan7186@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
