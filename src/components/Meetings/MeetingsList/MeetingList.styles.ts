import styled from 'styled-components';
import { MARGINS } from '../../../variables/sizesAndMargins';

export const StyledMeetingCardsContainer = styled.ul`
margin: 0;
padding: 0;
> li {
    margin-top: ${MARGINS.base}px;
}
margin-bottom: ${MARGINS.base * 2}px;
list-style: none;
`;
