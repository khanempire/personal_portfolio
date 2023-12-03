import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
   CompanyContainer,
   FooterWrapper,
   LinkColumn,
   LinkItem,
   LinkList,
   LinkTitle,
   Slogan,
   SocialContainer,
   SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
   return (
      <FooterWrapper>
         <LinkList>
            <LinkColumn>
               <LinkTitle>Call</LinkTitle>
               <LinkItem href='tel:8240968108'>+91-8240968108</LinkItem>
            </LinkColumn>
            <LinkColumn>
               <LinkTitle>Email</LinkTitle>
               <LinkItem href='mailto:mdaamirkhan7186@gmail.com'>
                  connect with email
               </LinkItem>
            </LinkColumn>
         </LinkList>
         <SocialIconsContainer>
            <CompanyContainer>
               <Slogan>Innovating the new products</Slogan>
            </CompanyContainer>
            <SocialContainer>
               <SocialIcons href='https://github.com/khanempire'>
                  <AiFillGithub size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.linkedin.com/in/md-aamir-khan-54b967182/'>
                  <AiFillLinkedin size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.instagram.com/coderinject/'>
                  <AiFillInstagram size='3rem' />
               </SocialIcons>
            </SocialContainer>
         </SocialIconsContainer>
      </FooterWrapper>
   );
};

export default Footer;
