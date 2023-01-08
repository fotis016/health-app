import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from '../theme/'
import {ReactComponent as Icon} from '../theme/icons/logo.svg'

type NavbarProps = {
  extend: boolean;
};
export const NavbarContainer = styled("nav")<NavbarProps>`
  width: 100%;
  height: ${(props) => (props.extend ? "100vh" : "60px")};
  background-color: ${colors.primary[10]};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 60px;
  }
`;
export const NavbarLinkContainer = styled("div")`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: ${colors.neutral.w};
  font-size: x-large;
  font-family: OpenSans-Regular, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: ${colors.secondary[20]};
  }
  &:active {
    color: ${colors.neutral[50]};
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: ${colors.neutral.w};
  font-size: x-large;
  font-family: OpenSans-Regular, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: ${colors.secondary[20]};
  }
  &:active {
    color: ${colors.neutral[50]};
  }
`;
export const ButtonLink = styled("button")`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${colors.neutral.w};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const ExtendedNavbar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const Logo = styled(Icon)`
  height: 50px;
  width: 50px;
  padding-top: 4px;
`
