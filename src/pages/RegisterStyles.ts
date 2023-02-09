import styled from 'styled-components';

import colors from '../theme';

export const RegisterContainer = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Button = styled.button`
width: 5%;
display: inline-block;
margin: 0 0.3em 0.3em 0;
border-radius: 1em;
border-color: #95fdff;
box-sizing: border-box;
font-family: OpenSans-Regular, sans-serif;
font-size: 20px;
color: ${colors.neutral.w};
background-color: #4eb5f1;
text-align: center;
transition: all 0.2s;

&:hover {
  background-color: #4095c6;
}

@media (max-width: 1400px){
 width: 18%;
}

`;

export const Input = styled.input`
  font-family: OpenSans-Regular, sans-serif;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: ${colors.neutral.w};
  border: none;
  width: 30%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  margin-top: 25px;

`
