import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import COLORS from '../../../../../variables/colors';

interface INavProps {
    isActive?: boolean;
}

export const StyledNavLink = styled(Nav.Link)<INavProps>`
    > a {
        color: ${({ isActive }) => isActive ? COLORS.black : COLORS.grey700};
        text-decoration: none;
    }
`;

export const StyledNavItem = styled(Nav.Item)<INavProps>`
    &:hover {
        background-color: ${COLORS.grey400};
    }
    background-color: ${({ isActive }) => isActive ? COLORS.grey400 : 'inherit'};
    transition: 0.2s;
`;
