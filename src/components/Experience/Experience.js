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
} from "./ExperienceStyles";
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

const Experience = () => (
   <Section nopadding id='experience'>
      <SectionDivider />
      <SectionTitle main>Professional Experience</SectionTitle>
      <GridContainer>
         {experience.map(
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
                     <TitleContent style={{marginTop: "10px"}}>Tech-Stack</TitleContent>
                     <TagList>
                        {tags.map((tag, i) => (
                           <Tag key={i}>{tag}</Tag>
                        ))}
                     </TagList>
                  </div>
                  {/* <UtilityList>
                     <ExternalLinks href={visit} target='_blank'>
                        Visit
                     </ExternalLinks>
                     <ExternalLinks href={source} target='_blank'>
                        Source Code
                     </ExternalLinks>
                  </UtilityList> */}
               </BlogCard>
            )
         )}
      </GridContainer>
   </Section>
);

export default Experience;
