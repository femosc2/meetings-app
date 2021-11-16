import styled from 'styled-components';
import { BREAKPOINTS } from '../../variables/breakpoints';

export const StyledNoMeetings = styled.section`
text-align: center;
margin-top: 200px;
@media only screen and (max-width: ${BREAKPOINTS.md}px) {
    margin-top: 50px;
  }
`;
