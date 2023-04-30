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
  Paragraph,
  SecondaryContainer,
  SubmitInput,
} from "./ContactStyles";
import { useState } from "react";
import axios from "axios";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [showModal, setShowModal] = useState(false);
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
      .then((response) => {
        console.log("Form submitted successfully", response);
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        // handle submission error here
      });
  };
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container text-center  bg-black">
      <MainContainer>
        <H1>{t("submitYourMessage")}</H1>
      </MainContainer>
      <MainContainer>
        <ContactContainer>
          <H2>{t("contactDetails")}</H2>
          <Paragraph>Email: tottinos86@gmail.com</Paragraph>
          <Paragraph>{t("telephone")}: +30 6907007937 </Paragraph>
        </ContactContainer>
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
              <SecondaryContainer style={{ gap: 30 }}>
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
          {showModal && (
            <div>
              <p>Form submitted successfully!</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          )}
        </FormContainer>
      </MainContainer>
    </div>
  );
};
export default ContactPage;
