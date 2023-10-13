import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background: Navy;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
`;

export const MainButton = styled(Button)`
margin: 4px 0px 0px 4px;
border: 1px solid black;
  height: 40px;
  text-transform: uppercase;
  width: 100px;
`;