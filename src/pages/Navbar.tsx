import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { IconButton } from "@mui/material";
import { ReactComponent as FlagUK } from "../theme/icons/gb.svg";
import { ReactComponent as FlagGR } from "../theme/icons/gr.svg";
import { useLanguageSelection } from "../i18n/LanguageSelection";

import i18n from "../i18n/i18n";
import {
  ButtonLink,
  ExtendedNavbar,
  Logo,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  GreeceFlag,
  UkFlag,
} from "./NavbarStyles";
import { reload } from "firebase/auth";

const Navbar = () => {
  const { t } = useTranslation(["translation"]);
  const handleLanguageChange = useLanguageSelection();
  const handleChangeLanguage = (lang: string) => {
    handleLanguageChange(lang);
  };
  const location = useLocation();
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  const reloadPage = () => {
    console.log("reloaded");
    window.location.reload();
  };

  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extend={extendNavbar}>
      <NavbarLinkContainer>
        {!extendNavbar && <Logo />}
        <NavbarLink className="nav-link active" to="/home">
          {t("headerHome")}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/vaccinations">
          {t("headerVaccinations")}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/pharmduties">
          {t("headerDuties")}
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          {t("headerContact")}
        </NavbarLink>
        {i18n.language === "en" && (
          <IconButton onClick={() => handleChangeLanguage("el")}>
            <GreeceFlag height={20} width={35} />
          </IconButton>
        )}
        {i18n.language === "el" && (
          <IconButton onClick={() => handleChangeLanguage("en")}>
            <UkFlag height={20} width={35} />
          </IconButton>
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
            {t("headerHome")}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/vaccinations">
            {t("headerVaccinations")}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/pharmduties">
            {t("headerDuties")}
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/contact">
            {t("headerContact")}
          </NavbarLinkExtended>
          {i18n.language === "en" && (
            <IconButton
              onClick={() => {
                i18n.changeLanguage("el");
              }}
            >
              <FlagGR height={20} width={35} />
            </IconButton>
          )}
          {i18n.language === "el" && (
            <IconButton
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <FlagUK height={20} width={35} />
            </IconButton>
          )}
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
