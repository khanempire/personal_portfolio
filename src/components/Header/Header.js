import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
   Container,
   Div1,
   Div2,
   Div3,
   NavLink,
   SocialIcons,
   Span,
} from "./HeaderStyles";

const Header = () => (
   <Container>
      <Div1>
         <Link href='/'>
            <a
               style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  marginBottom: "20px",
               }}
            >
               <DiCssdeck size='3rem' />
               <Span>Md Aamir Khan</Span>
            </a>
         </Link>
      </Div1>
      <Div2>
         <li>
            <Link href='#experience'>
               <NavLink>Experience</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#projects'>
               <NavLink>Projects</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#tech'>
               <NavLink>Technology</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#about'>
               <NavLink>About</NavLink>
            </Link>
         </li>
      </Div2>
      <Div3>
         <SocialIcons href='https://github.com/khanempire' target='_blank'>
            <AiFillGithub size='3rem' />
         </SocialIcons>
         <SocialIcons
            href='https://www.linkedin.com/in/md-aamir-khan-54b967182/'
            target='_blank'
         >
            <AiFillLinkedin size='3rem' />
         </SocialIcons>
         <SocialIcons
            href='https://www.instagram.com/coderinject/'
            target='_blank'
         >
            <AiFillInstagram size='3rem' />
         </SocialIcons>
      </Div3>
   </Container>
);

export default Header;
