import React from 'react';
import styled from 'styled-components';
import { PURPLE } from './Colors';

// type Props = {
//   secondary?: string,
// };
type Props = React.ComponentProps<typeof React.Component> & {
  secondary?: boolean,
}



const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent': PURPLE};
  border: ${(props: Props) => props.secondary ? `1px solid rgba(255, 255, 255, 0.295743)`: 'none'};
  border-radius: 6px;
  padding: 18px;
  min-width: 170px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 14px;
`;

export default Button;
