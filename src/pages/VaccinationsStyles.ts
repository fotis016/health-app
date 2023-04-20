import styled, { createGlobalStyle } from "styled-components";
import colors from "../theme";

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 45%;

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

export const ButtonContainer = styled.div`
 display: flex;
 flex-direction: row;
 padding-left: 10%;
 align-items: center;

 @media (max-width: 500px){
  margin-left: 35%;
  padding-left: 0%;
 }
`

export const ParagraphContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 37%;
 @media (max-width: 500px){
  padding-left: 10%;
 }
`
export const Paragraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap');
  color: ${colors.primary[20]};
  font-family: 'Open Sans', sans-serif;
`

export const DatePickerWrapperStyles = createGlobalStyle`
.date_picker.full-width {
    width: 100%;
}
`

export const Button = styled.button`
  width: 5%;
  display: inline-block;
  margin: 0 0.3em 0.3em 0;
  border-radius: 1em;
  border-color: #95fdff;
  box-sizing: border-box;
  font-family: OpenSans-Regular, sans-serif;
  color: ${colors.neutral.w};
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: #4095c6;
  }

  @media (max-width: 1400px){
   width: 18%;
  }

`;

export const GraphContainer = styled.div`
  align-items: center;
  @media (min-width: 2560px){
    width: 80%;
    height: 100%;
    padding-left: 280px;}
  @media (max-width: 1920px){
    width: 70%;
    height: 100%;
    padding-left: 400px;}
  @media (max-width: 800px){
    padding-left: 130px;
    padding-top: 20px;
  }
  padding-top: 50px;
  @media (max-width: 500px){
    padding-left: 70px;
    padding-top: 10px;
  }
`
