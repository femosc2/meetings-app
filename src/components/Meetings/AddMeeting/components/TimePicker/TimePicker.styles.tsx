import { Button, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledTimePickerContainer = styled.section`
display: flex;
justify-content: flex-start;
`;

export const StyledTimePicker = styled(Button)`
width: 50px;
height: 50px;
font-size: 25px;
&::after {
    display: none;
}
border-radius: 0px;
`;

export const StyledTimePickerSeperator = styled.p`
font-size: 30px;
margin: 0px 10px 0px 10px;
`;

export const StyledDropDown = styled(Dropdown.Menu)`
max-height: 350px;
overflow-y: scroll;
overflow-x: hidden;
`;
