import {
  useEffect,
  useState,
} from 'react';
import { isUserLoggedIn, logout } from '../firebase';
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
        <NavbarLink className="nav-link" to="/appointments">
          Appointments
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact Us
        </NavbarLink>
        {!isUserLoggedIn() && <NavbarLink style={{paddingLeft: '68em'}} className="nav-link" to="/login">
          Login
        </NavbarLink>}
        {!isUserLoggedIn() && <NavbarLink  className="nav-link" to="/register">
          Register
        </NavbarLink>}
        {isUserLoggedIn() && <NavbarLink className="nav-link" style={{paddingLeft: '65em'}} onClick={logout} to="/login">Logout</NavbarLink>}
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
          <NavbarLinkExtended className="nav-link" to="/appointments">
          Appointments
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
