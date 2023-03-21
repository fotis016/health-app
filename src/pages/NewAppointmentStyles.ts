import styled from "styled-components";
import colors from "../theme";
import Modal, { BaseModalBackground } from "styled-react-modal";
export const NewAppointmentContainer = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Paragraph = styled.p`
 color: ${colors.primary[20]};
 font-family: OpenSans-Regular, sans-serif;
`

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition : all 0.3s ease-in-out;`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props: { opacity: any; }) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
