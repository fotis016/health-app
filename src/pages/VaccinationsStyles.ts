import styled, { css, createGlobalStyle } from "styled-components";

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 47%;

 @media (max-width: 500px){
  padding-left: 10%;
 }
`

export const SecondaryContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;

 @media (max-width: 500px){

 }
`

export const ParagraphContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 40%;

 @media (max-width: 500px){
  padding-left: 10%;
 }
`
export const Paragraph = styled.p`
  font-family: OpenSans-Regular, sans-serif;
`

export const DatePickerWrapperStyles = createGlobalStyle`
.date_picker.full-width {
    width: 100%;
}
`
