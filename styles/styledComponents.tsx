import styled from 'styled-components';

type Props = {
  headNumber: number 
}

function headFunction(props: Props) {
  switch (props.headNumber) {
    case 1: return '72px'
    case 2: return '64px'
    case 3: return '48px'
    case 4: return '24px'
    case 5: return '16px'
    default: return '72px'
  }
}

const titleWeightFunction = (props: Props) => props.headNumber < 4 ? '800' : props.headNumber === 4 ? '700' : '400';

export const Title = styled.span.attrs({
  role: 'heading',
})`
  font-size: ${headFunction};
  font-weight: ${titleWeightFunction};
`;
