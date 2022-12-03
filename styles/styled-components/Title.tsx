import { styled } from '@stitches/react';
import { log } from 'console';

// interface Props {
//   headNumber?: 1 | 2 | 3 | 4 | 5 | 6,
// }

// function headFunction({ headNumber }: Props = { headNumber: 1 }) {
//   switch (headNumber) {
//     case 1: return 'font-size: 72px;'
//     case 2: return '64px'
//     case 3: return '48px'
//     case 4: return '24px'
//     case 5: return '16px'
//     default: return '72px'
//   }
// }

// function titleWeightFunction({ headNumber }: Props = { headNumber: 1 }){
//   console.log(headNumber);
  
//   return headNumber < 4 ? '800' : headNumber === 4 ? '700' : '400';
// }

// const Title = styled('span', {
//   fontSize: headFunction,
//   fontWeight: titleWeightFunction,
// });

const Title = styled('span', {
  variants: {
    headNumber: {
      1:  {
        fontSize: '72px',
        fontWeight: 800
      },
      2: {
        fontSize: '64px',
        fontWeight: 800
      },
      3: {
        fontSize: '48px',
        fontWeight: 800
      },
      4: {
        fontSize: '24px',
        fontWeight: 700
      },
      5: {
        fontSize: '16px',
        fontWeight: 400
      }
    },
  },
  defaultVariants: {
    headNumber: 1,
  }
})

export default Title;
