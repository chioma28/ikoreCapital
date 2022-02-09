import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialDribbbleCircular } from 'react-icons/ti';
import { FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrapper,
    TextWrapper,
    TextHeading,
    Divider,
    FooterContent,
    TextContent,
    IconGroup,
    Icon
} from './FooterElements';

const FooterSection = ( {  heading, text} ) => {
    return (
        <>
          <FooterContainer >
              <FooterWrapper>
                  <TextWrapper>
                      <TextHeading to="/" >{heading}</TextHeading>
                  </TextWrapper>
                  <Divider></Divider>
                  <FooterContent>
                      <TextContent>&#169;{text}</TextContent>
                      <IconGroup>
                          <Icon to="/"> <FaInstagramSquare /> </Icon>
                          <Icon to="/"> <TiSocialDribbbleCircular /> </Icon>
                          <Icon to="/"> <AiFillTwitterCircle/> </Icon>
                          <Icon to="/"> <FaYoutubeSquare /> </Icon>
                      </IconGroup>
                  </FooterContent>
              </FooterWrapper>
          </FooterContainer>  
        </>
    )
}

export default FooterSection;
