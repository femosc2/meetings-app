import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import COLORS from '../../../../../variables/colors';
import { MARGINS, PADDINGS } from '../../../../../variables/sizesAndMargins';

export const StyledDropDownMenu = styled(Dropdown.Menu)`
max-height: 400px;
overflow: scroll;
background: ${COLORS.grey200};
text-align: center;
overflow-x: hidden;
`;

export const StyledFilterHeader = styled.p`
font-size: 22px;
margin: 5px;
`;

export const StyledAttendeesContainer = styled.section`
padding: ${PADDINGS.base * 2}px;
margin-top: -${MARGINS.base * 2}px;
> div > button {
    margin-top: ${MARGINS.base}px;
}
`;
