import styled from "styled-components";
import colors from "../theme";

export const Header = styled.h1`
  font-family: "Open Sans", sans-serif;
  padding-left: 43%;
  color: ${colors.primary[20]};
  @media (max-width: 500px) {
    padding-left: 7%;
  }
`;

export const Paragraph = styled.p`
  font-family: OpenSans-Regular, sans-serif;
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const MainContainer = styled.div`
  flex: 1;
  flex-direction: column;
  width: auto;
  height: 80%;
`;
export const ImageWrapper = styled.div`
  height: 800px;
  width: auto;
`;
export const ImageContainer = styled.img`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const MainNewsContainer = styled.div`
  border-radius: 5px;
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.primary[10]};
  overflow-y: scroll;
  overflow: hidden;
`;
export const A = styled.a`
  text-decoration: underline;
  color: ${colors.neutral.b};
  font-family: "OpenSans-Regular, sans-serif";
  &:visited {
    color: ${colors.neutral.b};
  }
`;
