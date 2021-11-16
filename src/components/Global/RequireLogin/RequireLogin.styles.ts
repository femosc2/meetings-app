import styled from 'styled-components';
import COLORS from '../../../variables/colors';

export const StyledRequireLoginContainer = styled.section`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
> h2 {
    margin-top: 10%;
}
`;

export const StyledSpan = styled.span`
color: ${COLORS.darkTeal};
text-decoration: underline;
&:hover {
    cursor: pointer;
}
`;
