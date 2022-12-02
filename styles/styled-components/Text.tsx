import styled from 'styled-components';
import Colors from './Colors'

type Props = {
  size?: string,
  color?: string,
};

const changeFontSize = (props: Props) => {
  switch (props.size) {
    case 'big': return '20px'
    case 'small': return '14px'
    default: return '16px'
  }
};

const changeTextColor = (props: Props) => {
  switch (props.color) {
    case 'dark': return Colors.TEXT_DARK;
    case 'dark-accent': return Colors.TEXT_DARK_ACCENT;
    case 'dark-gray': return Colors.TEXT_DARK_GRAY;
    case 'light': return Colors.TEXT_LIGHT;
    case 'light-accent': return Colors.TEXT_LIGHT_ACCENT;
    case 'light-gray': return Colors.TEXT_LIGHT_GRAY;
    default: return Colors.TEXT_LIGHT;
  }
};

const Text = styled.p`
  font-size: ${changeFontSize};
  color: ${changeTextColor};
`;

export default Text;
