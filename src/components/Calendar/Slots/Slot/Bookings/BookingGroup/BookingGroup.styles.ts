import styled from 'styled-components';
import COLORS from '../../../../../../variables/colors';
import { FONTSIZES, MARGINS, PADDINGS } from '../../../../../../variables/sizesAndMargins';

interface IBookingGroupContainerProps {
    isMinimized: boolean;
}

export const StyledBookingGroupContainer = styled.section<IBookingGroupContainerProps>`
    display: flex;
    flex-direction: column;
    margin: 0px ${MARGINS.calendarSlotMargin}px ${MARGINS.calendarSlotMargin}px  ${MARGINS.calendarSlotMargin}px;
    background-color: ${COLORS.transparent90};
    height: ${(props) => props.isMinimized ? '100px' : '1500px'};
    z-index: ${(props) => props.isMinimized ? 2 : 3};
    overflow: hidden;
    transition: 0.5s;
    position: absolute;
    border: 5px solid ${COLORS.teal};
    justify-content: space-between;
    padding: ${PADDINGS.calendarSlot}px;
    > h4 {
        font-weight: 700;
        font-size: ${FONTSIZES.calendarSlotHeading}px;
    }
    min-width: ${window.innerWidth * 0.5}px;
`;
