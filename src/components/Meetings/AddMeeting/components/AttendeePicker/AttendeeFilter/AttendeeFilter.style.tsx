import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import COLORS from '../../../../../../variables/colors';

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

