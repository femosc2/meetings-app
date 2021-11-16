import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../variables/breakpoints';
import COLORS from '../../variables/colors';
import { MARGINS, SIZES } from '../../variables/sizesAndMargins';

export const StyledSingleTeamContainer = styled.figure`
    display: flex;
    flex-direction: row;
    border: 1px solid ${COLORS.grey400};
    border-radius: 10px;
    align-content: flex-start;
    width: 20vw;
    height: ${SIZES.cardHeight}px;
    padding: 15px;
    flex-wrap: wrap;
    > * {
        width: 100%;
    }
    margin: ${MARGINS.base}px;
    @media only screen and (max-width: ${BREAKPOINTS.xl}px) {
        width: 40vw;
      }
    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
      overflow-y: auto;
`;

export const StyledAddSymbol = styled.h3`
font-size: ${SIZES.cardHeight / 3.5}px;
text-align: center;
margin-top: ${SIZES.cardHeight / 3.5}px;
&:hover {
    cursor: pointer;
}
`;

export const StyledTeamContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
flex: 1 1 0px;
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
  margin: 0 auto;
}
`;

export const StyledExcuseButton = styled(Button)`
width: 150px;
`;

export const StyledAddMemberButton = styled(Button)`
`;

export const StyledMemberSection = styled.section`
  height: 100px;
  overflow: auto;
`;
