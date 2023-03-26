import {
  useEffect,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { IconButton } from '@mui/material';

import i18n from '../i18n/i18n';
import { ReactComponent as UkFlag } from '../theme/icons/gb.svg';
import { ReactComponent as GreeceFlag } from '../theme/icons/gr.svg';
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
  const {t} = useTranslation(['translation']);
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
          {t('headerHome')}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/vaccinations">
          {t('headerVaccinations')}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/pharmduties">
        {t('headerDuties')}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
        {t('headerContact')}
        </NavbarLink>
        {(i18n.language===(
          'en' ) && (<IconButton onClick={() => i18n.changeLanguage('el')}>
          <GreeceFlag height={20} width={35} />
        </IconButton>)
        )}
        {(i18n.language===(
          'el' ) && (<IconButton onClick={() => i18n.changeLanguage('en')}>
          <UkFlag height={20} width={35} />
        </IconButton>)
        )}
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
          {t('headerHome')}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/vaccinations">
          {t('headerVaccinations')}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/pharmduties">
          {t('headerDuties')}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/contact">
          {t('headerContact')}
          </NavbarLinkExtended>
          {(i18n.language===(
          'en' ) && (<IconButton onClick={() => i18n.changeLanguage('el')}>
          <GreeceFlag height={20} width={35} />
        </IconButton>)
        )}
        {(i18n.language===(
          'el' ) && (<IconButton onClick={() => i18n.changeLanguage('en')}>
          <UkFlag height={20} width={35} />
        </IconButton>)
        )}
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
