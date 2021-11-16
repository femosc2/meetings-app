import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { slideInFromBottom } from '../../../variables/animations';

export const StyledSnackbar = styled(Alert)`
    position: fixed;
    bottom: 0;
    width: 100vw;
    margin: 0;
    text-align: center;
    animation: ${slideInFromBottom} 0.5s 1 forwards;
    z-index: 10;
`;
