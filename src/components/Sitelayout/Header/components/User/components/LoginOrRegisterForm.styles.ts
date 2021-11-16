import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import COLORS from '../../../../../../variables/colors';
import { MARGINS } from '../../../../../../variables/sizesAndMargins';

export const StyledLink = styled.a`
    color: ${COLORS.primary};
`;

export const StyledErrorText = styled.p`
    color: ${COLORS.red}
`;

export const StyledSwitchSpan = styled.span`
margin-top: ${MARGINS.base / 2}px;
`;

export const StyledButton = styled(Button)`
margin-bottom: ${MARGINS.base}px;
`;
