import React from "react";

import {
   BlogCard,
   CardInfo,
   ExternalLinks,
   GridContainer,
   HeaderThree,
   Hr,
   Tag,
   TagList,
   TitleContent,
   UtilityList,
   Img,
} from "./ProjectsStyles";
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
   <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
         {projects.map(
            ({ id, image, title, description, tags, source, visit, featuresList }) => (
               <BlogCard key={id}>
                  <Img src={image} />
                  <TitleContent>
                     <HeaderThree title>{title}</HeaderThree>
                     <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <CardInfo>
                  <ul>
                     {featuresList && featuresList.length && featuresList.map((eachFeature,i) => (
                        <li key={i}>{eachFeature}</li>
                   ))}
                  </ul>
                  </CardInfo>
                  <div>
                     <TitleContent style={{marginTop: "10px"}}> Tech-Stack</TitleContent>
                     <TagList>
                        {tags.map((tag, i) => (
                           <Tag key={i}>{tag}</Tag>
                        ))}
                     </TagList>
                  </div>
                  <UtilityList>
                     <ExternalLinks href={visit} target='_blank'>
                        Visit
                     </ExternalLinks>
                     <ExternalLinks href={source} target='_blank'>
                        Source Code
                     </ExternalLinks>
                  </UtilityList>
               </BlogCard>
            )
         )}
      </GridContainer>
   </Section>
);

export default Projects;
