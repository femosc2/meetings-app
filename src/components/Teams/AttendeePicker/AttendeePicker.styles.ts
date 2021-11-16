import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { MARGINS } from '../../../variables/sizesAndMargins';

export const StyledDropDownToggle = styled(Dropdown.Toggle)`
    width: 100%;
    margin-top: ${MARGINS.base * 2}px;
    margin-bottom: -${MARGINS.base * 2 }px;
`;
