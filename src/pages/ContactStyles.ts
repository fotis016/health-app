import styled from "styled-components";
import colors from "../theme";
import Modal from "styled-react-modal";
export const StyledModal = Modal.styled`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 210px;
  height: 100vh;
  width: 100%;
  background-color: ${colors.primary[50]};
  position: fixed;
  transition: all 0.3s ease-in-out;
`;
export const FormContainer = styled.div`
  border-radius: 6px;
  width: 80%;
  margin-top: 20px;
  max-width: 800px;
  padding: 50px;
  background-color: ${colors.primary[30]};
`;

export const Input = styled.input`
  font-family: OpenSans-Regular, sans-serif;
  font-size: 0.8rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: ${colors.neutral.w};
  border: none;
  width: 50%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  margin-top: 25px;
  outline: none;
`;

export const Label = styled.label`
  font-family: OpenSans-Regular, sans-serif;
  color: ${colors.neutral.w};
`;

export const MainContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow: hidden;
`;

export const ContactContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 10%;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
`;

export const MessageInput = styled.textarea`
  font-family: OpenSans-Regular, sans-serif;
  font-size: 0.8rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: ${colors.neutral.w};
  border: none;
  height: 150px;
  width: 200px;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  margin-top: 25px;
  outline: none;
`;

export const SubmitInput = styled.input`
  font-family: OpenSans-Regular, sans-serif;
  font-size: 0.8rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: ${colors.neutral.w};
  border: none;
  width: 100%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  margin-top: 25px;
  outline: none;
`;

export const H1 = styled.h1`
  color: ${colors.primary[20]};
  font-family: Open Sans, sans-serif;
`;

export const H2 = styled.h2`
  color: ${colors.primary[20]};
  font-family: Open Sans, sans-serif;
`;

export const Paragraph = styled.p`
  color: ${colors.neutral.w};
  font-weight: bold;
  font-family: Open Sans, sans-serif;
`;

export const ModalText = styled.p`
  color: ${colors.neutral.w};
  font-weight: bold;
  font-size: 25px;
  font-family: Open Sans, sans-serif;
`;
