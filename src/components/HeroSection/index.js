import React from 'react';
import Image from '../../images/image1.jpg';
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg, 
    HeroContent, 
    HeroH, 
    HeroH1, 
    HeroH5, 
    HeroBox,
    HeroLine,
    HeroP
    
} from './HeroElements';

const HeroSection= ({id}) => {
    return (
        <HeroContainer id={id}> 
            <HeroBg >
                <ImageBg style={{ backgroundImage: `url(${Image})`}} />
            </HeroBg>
            <HeroContent>
                <HeroH>
                <HeroH1>
                    INVESTING IN HUMAN IMPACT <br />
                    & PROFITABLE TECHNOLOGY <br />
                    STARTUPS ACROSS AFRICA
                </HeroH1>
                <HeroH5>
                Impact investment, Venture capital, 
                Angel investment in Agric Tech and Non Agric Tech
                </HeroH5>
                </HeroH>
                <HeroBox >THE DREAM</HeroBox>
                <HeroLine></HeroLine>
                <HeroP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla eget sagittis nunc. Aliquam sollicitudin dignissim orci, 
                    sit amet mollis dui viverra sit amet. Morbi vehicula aliquam feugiat. 
                    Cras vehicula dui et scelerisque facilisis. Ut id dolor at odio semper 
                    luctus. Vivamus sodales nisnec dictum commodo. Proin et libero dapibus, 
                    lacinia augue bibendum, vulputate libero. Mauris quis ipsum in purus 
                    rutrum convallis a vel dui. Orci varius natoque penatibus et magnis dis 
                    parturient montes, nascetur ridiculus mus. Nullam vel augue ornare, 
                    efficitur mauris ac, fringilla massa. Pellentesque habitant morbi tristique 
                    senectus et netus et malesuada fames ac turpis egest
                    Mauris vitae diam lacinia, malesuada ipsum quis, comm 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;