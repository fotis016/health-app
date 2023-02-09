import {
  useEffect,
  useState,
} from 'react';

import { useLocation } from 'react-router-dom';

import {
  ButtonLink,
  ExtendedNavbar,
  Logo,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
} from './NavbarStyles';

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extend={extendNavbar}>
      <NavbarLinkContainer>
      {!extendNavbar && <Logo />}
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/vaccinations">
          Vaccination Statistics
        </NavbarLink>
        <NavbarLink className="nav-link" to="/pharmduties">
          Pharmacy Duties
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact Us
        </NavbarLink>
        <NavbarLink style={{paddingLeft: 1000}} className="nav-link" to="/login">
          Login
        </NavbarLink>
        <NavbarLink  className="nav-link" to="/register">
          Register
        </NavbarLink>
        <ButtonLink
          onClick={() => {
            setExtendNavbar(!extendNavbar);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </ButtonLink>
      </NavbarLinkContainer>
      {extendNavbar && (
        <ExtendedNavbar>
          <NavbarLinkExtended className="nav-link active" to="/home">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/vaccinations">
          Vaccination Statistics
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/pharmduties">
          Pharmacy Duties
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/contact">
            Contact Us
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="login">
            Login
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="register">
            Register
          </NavbarLinkExtended>
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
