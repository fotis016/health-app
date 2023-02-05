import styled from "styled-components"
import colors from "../theme"

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const CarouselContainer = styled.div`
 padding-top: 40px;
`

export const ItemContainer = styled.div`
 background-color: "rgba(255,255,255, 0.5)";
`

export const Paragraph = styled.p`
 color: ${colors.primary[20]};
 font-family: OpenSans-Regular, sans-serif;
`

export const ItemTitle = styled.p`
 color: ${colors.secondary[20]};
 font-family: OpenSans-Regular, sans-serif;
`

export const ItemText = styled.p`
 color: ${colors.neutral[30]};
 font-family: OpenSans-Regular, sans-serif;
`

export const H1 = styled.h1`
 color: ${colors.primary[20]};
 font-family: OpenSans-Bold, sans-serif;
`
export const Button = styled.button`
  width: 60px;
  display: inline-block;
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
`
export const TableContainer = styled.div`
 height: 600px;
 overflow-y: hidden;
 background-color: rgba(0, 0, 0, 0.68);
`

export const ButtonContainer = styled.div`
 padding-top: 10px;
`

export const A = styled.a`
  text-decoration: none;
  color: ${colors.neutral[30]};

  &:visited {
    color: ${colors.neutral[30]};
  }
`;
