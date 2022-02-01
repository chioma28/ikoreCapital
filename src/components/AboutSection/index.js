import React from 'react';
import { 
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    TextHeading,
    TextBody,
    Rectangle,
    ImageWrapper, 
    AboutImage,
    AboutLine
} from './AboutElements';

const AboutSection  = ({ id,imgStart,heading,description,img,alt }) => {

    return (
        <>
            <AboutContainer id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TextHeading>{heading} </TextHeading>
                                <TextBody>{description}</TextBody>
                            </TextWrapper>
                        </Column1>
                        <AboutLine></AboutLine>
                        <Column2>
                            <Rectangle></Rectangle>
                            <ImageWrapper>
                                <AboutImage  src={img} alt={alt}/>
                            </ImageWrapper>
                            
                            
                            
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>    
        </>
    )
}

export default AboutSection;
