import { useTranslation } from "react-i18next";
import {
  ContactContainer,
  FormContainer,
  H1,
  H2,
  Input,
  Label,
  MainContainer,
  MessageInput,
  StyledModal,
  ModalText,
  Paragraph,
  SecondaryContainer,
  SubmitInput,
} from "./ContactStyles";
import { useState } from "react";
import axios from "axios";
import { css } from "@emotion/css";

const Message = css`
  @media (max-width: 500px) {
    width: 290px;
  }
`;
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const beforeClose = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post("https://api.web3forms.com/submit", {
        access_key: "c22a5da5-8318-4269-a2e6-12b937f49309",
        ...formData,
      })
      .then(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        // handle submission error here
      });
  };
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container text-center  bg-black">
      {showModal && (
        <StyledModal isOpen={showModal} beforeClose={beforeClose}>
          <ModalText>{t("formSubmitted")}</ModalText>
        </StyledModal>
      )}
      <MainContainer>
        <H1>{t("submitYourMessage")}</H1>
      </MainContainer>
      <MainContainer>
        <FormContainer>
          <form
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="redirect"
              value="http://localhost:3000/contact"
            />
            <input
              type="hidden"
              name="access_key"
              value="c22a5da5-8318-4269-a2e6-12b937f49309"
            />
            <MainContainer>
              <SecondaryContainer>
                <Label>{t("name")}</Label>
                <Input
                  id="name"
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </SecondaryContainer>
              <SecondaryContainer>
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </SecondaryContainer>
              <SecondaryContainer className={Message}>
                <Label>{t("message")}</Label>
                <MessageInput
                  id="message"
                  name="Message"
                  required
                  value={formData.Message}
                  onChange={handleChange}
                ></MessageInput>
              </SecondaryContainer>
              <SecondaryContainer style={{ paddingLeft: 85 }}>
                <SubmitInput type="submit" value="Submit" />
              </SecondaryContainer>
            </MainContainer>
          </form>
        </FormContainer>
        <ContactContainer>
          <H2>{t("contactDetails")}</H2>
          <Paragraph>Email: tottinos86@gmail.com</Paragraph>
          <Paragraph>{t("telephone")}: +30 6907007937 </Paragraph>
        </ContactContainer>
      </MainContainer>
    </div>
  );
};
export default ContactPage;
