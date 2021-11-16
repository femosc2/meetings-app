import styled from 'styled-components';
import { BREAKPOINTS } from '../../../../../../variables/breakpoints';
import COLORS from '../../../../../../variables/colors';
import { FONTSIZES, MARGINS, PADDINGS, SIZES } from '../../../../../../variables/sizesAndMargins';

interface IStyledBookingProps {
    height: number;
    borderColor: string;
    isMinimized: boolean;
    topMargin: number;
}

export const StyledBookingHeader = styled.section`
display: flex;
justify-content: space-between;
padding: ${PADDINGS.calendarSlot}px;
`;

export const StyledBooking = styled.figure<IStyledBookingProps>`
flex-grow: 1;
margin: 0px ${MARGINS.calendarSlotMargin}px 0px ${MARGINS.calendarSlotMargin}px;
margin-top: ${(props) => props.topMargin ? props.topMargin : 0}px;
height: ${(props) => props.height * (SIZES.calendarSlot + MARGINS.calendarSlotMargin)}px;
border: 3px solid ${(props) => props.borderColor};
background-color: ${COLORS.transparent90};
> * {
    font-size: ${FONTSIZES.calendarSlotText}px;
}
> h4 {
    font-weight: 700;
    font-size: ${FONTSIZES.calendarSlotHeading}px;
}
> ul {
    padding: ${MARGINS.calendarSlotMargin}px;
    list-style: none;
}
> h5 {
    padding: ${MARGINS.calendarSlotMargin}px;
}
transition: 0.5s;
overflow: ${(props) => props.isMinimized ? 'hidden' : 'auto' };
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
    background-color: ${COLORS.darkTeal};
    height: 200px;
    color: ${COLORS.white};
    margin-top: ${MARGINS.base}px;
  }
  overflow-x: hidden;
`;
