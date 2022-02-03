import React from 'react';  
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';
import { IoLogoLinkedin } from 'react-icons/io';
import{ 
    TeamContainer,
    TeamWrapper,
    TextWrapper,
    TextHeading,
    TextDescription,
    TeamGroup,
    Teams,
    TeamImg,
    Name,
    Role,
    TeamIcons,
    Icon
} from './TeamElement';

const TeamSection = ({ id, heading, description, img, 
    name1, name2, name3, name4, name5, name6,
role1, role2, role3, role4, role5, role6}) => {
    return (
        <>
           <TeamContainer id={id}>
               <TeamWrapper>
                   <TextWrapper>
                       <TextHeading>{heading}</TextHeading>
                       <TextDescription>{description}</TextDescription>
                   </TextWrapper>
                   <TeamGroup>
                       <Teams>
                           <TeamImg src={img}/>
                           <Name>{name1}</Name>
                           <Role>{role1}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                       <Teams>
                           <TeamImg src={img} />
                           <Name>{name2}</Name>
                           <Role>{role2}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                       <Teams>
                           <TeamImg src={img} />
                           <Name>{name3}</Name>
                           <Role>{role3}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                       <Teams>
                           <TeamImg src={img} />
                           <Name>{name4}</Name>
                           <Role>{role4}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                       <Teams>
                           <TeamImg src={img} />
                           <Name>{name5}</Name>
                           <Role>{role5}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                       <Teams>
                           <TeamImg src={img} />
                           <Name>{name6}</Name>
                           <Role>{role6}</Role>
                           <TeamIcons>
                               <Icon> <AiOutlineInstagram /> </Icon>
                               <Icon> <BiGlobe/> </Icon>
                               <Icon> <IoLogoLinkedin /> </Icon>
                           </TeamIcons>
                       </Teams>
                   </TeamGroup>
               </TeamWrapper>
           </TeamContainer> 
        </>
    )
}

export default TeamSection;
