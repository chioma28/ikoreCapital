import React from 'react';
import {
    ProjectsContainer,
    ProjectsWrapper,
    TextWrapper,
    TextHeading,
    TextDescription,
    CompanyWrapper,
    CompanyItem,
    CompanyItem1,
    CompanyI,
    CompanyT
} from './ProjectsElements';

const ProjectsSection = ({ id, heading, description, img1, img2, img3, text1, text2, 
    text3, color1, color2, color3, font1, font2, font3, margin1,margin2, margin3, margin4, height2, width2, height3, width3 }) => {
    return (
        <>
            <ProjectsContainer id={id}>
                <ProjectsWrapper>
                    <TextWrapper>
                        <TextHeading>{heading}</TextHeading>
                        <TextDescription>{description}</TextDescription>
                    </TextWrapper>
                    <CompanyWrapper>
                        <CompanyItem>
                            <CompanyI src={img1} />
                        </CompanyItem>
                        <CompanyItem>
                            <CompanyT style={{ color: color1, fontSize: font1, marginTop: margin1}}>{text1}</CompanyT>
                        </CompanyItem>
                        <CompanyItem>
                            <CompanyT style={{ color: color2, fontSize: font2 , marginTop: margin2}}>{text2}</CompanyT>
                        </CompanyItem>
                        <CompanyItem>
                            <CompanyI src={img2} style={{ height: height2, width: width2}} />
                        </CompanyItem>
                        <CompanyItem1 >
                            <CompanyI src={img3} style={{ height: height3, width: width3, marginTop: margin4}} />
                        </CompanyItem1>
                        <CompanyItem >
                            <CompanyT style={{ color: color3, fontSize: font3, marginTop: margin3}}>{text3}</CompanyT>
                        </CompanyItem>
                    </CompanyWrapper>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}


export default ProjectsSection;
