import React from 'react';
import { 
    ComingContainer,
    ComingWrapper,
    TextWrapper,
    Heading,
    Description,
    FormContainer,
    InputBox,
    SubmitButton
} from './ComingElements';
const ComingSection = ({ heading, description ,placeholder}) => {
    return (
        <>
           <ComingContainer>
               <ComingWrapper>
                   <TextWrapper>
                       <Heading>{heading}</Heading>
                       <Description>{description}</Description>
                   </TextWrapper>
                   <FormContainer>
                       <InputBox placeholder={placeholder}/>
                       <SubmitButton to="/submit">Submit</SubmitButton>
                   </FormContainer>
               </ComingWrapper>
           </ComingContainer> 
        </>
    )
}

export default ComingSection;
