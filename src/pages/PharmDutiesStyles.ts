import styled from "styled-components"
import colors from "../theme"

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const Paragraph = styled.p`
 color: ${colors.primary[20]};
 font-weight: bold;
 font-size:
 font-family: Open Sans, sans-serif;
`

export const ItemTitle = styled.p`
 font-weight: bold;
 color: ${colors.neutral.w};
 font-family: Open Sans, sans-serif;
`

export const ItemText = styled.p`
 color: ${colors.neutral.w};
 font-family: Open Sans, sans-serif;
`

export const H1 = styled.h1`
 color: ${colors.neutral.w};
 font-family: Open Sans, sans-serif;
`
export const Button = styled.button`
  width: 60px;
  display: inline-block;
  border-radius: 1em;
  border-color: #95fdff;
  box-sizing: border-box;
  font-family: Open Sans, sans-serif;
  color: ${colors.neutral.w};
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: #4095c6;
  }
`
export const TableContainer = styled.div`
 height: 600px;
 overflow-y: hidden;
 background-color:${colors.primary[10]};
`

export const ButtonContainer = styled.div`
 padding-top: 10px;
`

export const A = styled.a`
  text-decoration: underline;
  color: ${colors.neutral.w};

  &:visited {
    color: ${colors.neutral.w};
  }
`;
