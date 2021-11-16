import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import COLORS from '../../../../variables/colors';

export const StyledDropDownMenu = styled(Dropdown.Menu)`
max-height: 350px;
overflow: scroll;
background: ${COLORS.grey200};
text-align: center;
overflow-x: hidden;
position: absolute;
width: 100%;
`;

