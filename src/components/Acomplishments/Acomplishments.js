import React from "react";

import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
   { number: 5, text: "Projects" },
   { number: 5000, text: "Students" },
   { number: 5, text: "Github Followers" },
   { number: 50, text: "Github Stars" },
];

const Acomplishments = () => (
   <Section>
      <SectionTitle>Personal Accomplishment</SectionTitle>
      <Boxes>
         {data.map((card, index) => (
            <Box key={index}>
               <BoxNum>{card.number}</BoxNum>
               <BoxText>{card.text}</BoxText>
            </Box>
         ))}
      </Boxes>
   </Section>
);

export default Acomplishments;
