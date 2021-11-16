import { Button, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../../../../../variables/breakpoints';
import COLORS from '../../../../../../variables/colors';
import { MARGINS } from '../../../../../../variables/sizesAndMargins';

export const StyledAttendeeButton = styled(Button)`
margin: 10px 10px 10px 0px;
min-width: 300px;
overflow: none;
&:hover {
    background-color: ${COLORS.red};
    border: 1px solid ${COLORS.red};
}

`;

export const StyledAddButton = styled(Dropdown.Toggle)`
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
    margin-top: ${MARGINS.base}px;
    margin-bottom: -2px;
  }
`;
