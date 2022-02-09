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
const ComingSection = ({id, heading, description ,placeholder, type}) => {
    return (
        <>
           <ComingContainer id={id}>
               <ComingWrapper>
                   <TextWrapper>
                       <Heading>{heading}</Heading>
                       <Description>{description}</Description>
                   </TextWrapper>
                   <FormContainer>
                       <InputBox placeholder={placeholder} type={type} autoFocus={true}/>
                       <SubmitButton to="/submit">Submit</SubmitButton>
                   </FormContainer>
               </ComingWrapper>
           </ComingContainer> 
        </>
    )
}

export default ComingSection;
