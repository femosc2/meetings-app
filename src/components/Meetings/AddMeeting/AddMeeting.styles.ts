import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../../variables/breakpoints';
import { MARGINS } from '../../../variables/sizesAndMargins';

export const StyledAddButton = styled(Button)`
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
    margin-bottom: ${MARGINS.base}px;
  }
`;
