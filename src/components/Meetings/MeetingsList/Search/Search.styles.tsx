import styled from 'styled-components';
import { BREAKPOINTS } from '../../../../variables/breakpoints';
import COLORS from '../../../../variables/colors';
import { FONTSIZES, MARGINS, PADDINGS } from '../../../../variables/sizesAndMargins';

export const StyledSearchContainer = styled.section`
    background-color: ${COLORS.teal};
    border-radius: 10px;
    > h2 {
        color: white;
    }
    padding: ${PADDINGS.base * 2}px;
    > form > button {
        margin-top: ${MARGINS.base}px;
        background-color: ${COLORS.darkTeal};
        border: 1px solid ${COLORS.teal};
    }
    > form > label {
        margin-top: ${MARGINS.base}px;
    }
    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
        border-radius: 0px;
      }
`;

export const StyledInputHeader = styled.h4`
    color: ${COLORS.black};
    font-size: ${FONTSIZES.searchHeader}px;
`;
