import styled from 'styled-components';
import { BREAKPOINTS } from '../../../variables/breakpoints';
import COLORS from '../../../variables/colors';

export const StyledSlot = styled.li`
    height: 100px;
    background-color: ${COLORS.teal};
    margin-top: 15px;
    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
        background-color: rgba(0,0,0,0);
      }
`;

export const StyledSlotsContainer = styled.ol`
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
    background-color: ${COLORS.teal};
  }
`;

export const StyledSlotContainer = styled.li`
`;
