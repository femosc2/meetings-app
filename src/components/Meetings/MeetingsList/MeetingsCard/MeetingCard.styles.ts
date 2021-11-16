import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FONTSIZES, MARGINS } from '../../../../variables/sizesAndMargins';

export const StyledExcuseButton = styled(Button)`
margin-bottom: -${MARGINS.base}px;
`;


export const StyledDateInHeader = styled.span`
font-size: ${FONTSIZES.meetingCardDateHeader}px;
`;
