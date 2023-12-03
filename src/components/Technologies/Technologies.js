import React from "react";
import { DiFirebase, DiReact, DiZend, DiAws, DiDocker } from "react-icons/di";
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from "../../styles/GlobalComponents";
import {
   List,
   ListContainer,
   ListItem,
   ListParagraph,
   ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
   <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
         I have worked on range of technologies in the web-development world.
      </SectionText>
      <List>
         <ListItem>
            <DiReact size='3rem' />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>
                  Experience with <br /> ReactJs, JavaScript, Redux, NextJs,
                  Html, Css, Bootstrap, Tailwind, Material UI
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <DiFirebase size='3rem' />
            <ListContainer>
               <ListTitle>Back-End</ListTitle>
               <ListParagraph>
                  Experience with <br /> NodeJs, ExpressJs, Flask, MongoDB
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <DiAws size='3rem' />
            <ListContainer>
               <ListTitle>Cloud</ListTitle>
               <ListParagraph>
                  Experience with <br /> AWS Lambda, AWS EC2, AWS Queue, AWS
                  Api-gateway, AWS S3
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <DiDocker size='3rem' />
            <ListContainer>
               <ListTitle>DevOps</ListTitle>
               <ListParagraph>
                  Experience with <br /> Docker, Kubernetes, Nginx, Terraform,
                  Terragrunt, HELM
               </ListParagraph>
            </ListContainer>
         </ListItem>
      </List>
   </Section>
);

export default Technologies;
