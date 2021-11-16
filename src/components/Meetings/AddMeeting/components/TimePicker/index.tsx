import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Meeting } from '../../../../../models';
import { StyledTimePickerContainer, StyledTimePicker, StyledTimePickerSeperator, StyledDropDown } from './TimePicker.styles';
import range from '../../../../../utils/range';

interface IProps {
  newMeeting: Meeting;
  setNewMeeting: (meeting: Meeting) => void;
}

const TimePicker: React.FC<IProps> = (props) => {
  const validHours = range(8,18);
  const validMinutes = range(0,59);
  const { newMeeting, setNewMeeting } = props;
  return (
    <StyledTimePickerContainer>
      <Dropdown>
        <Dropdown.Toggle as={StyledTimePicker} variant="primary" id="dropdown-basic">
          {newMeeting.startTime.hours}
        </Dropdown.Toggle>

        <StyledDropDown>
          {validHours.map((vh) => {
            return (
              <Dropdown.Item key={vh} disabled={vh > newMeeting.endTime.hours}
                onClick={() => setNewMeeting({ ...newMeeting, startTime: {
                  ...newMeeting.startTime,
                  hours: vh,
                } },
                )}>{vh}</Dropdown.Item>
            );
          })}
        </StyledDropDown>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={StyledTimePicker} variant="primary" id="dropdown-basic">
          {newMeeting.startTime.minutes < 10 ? `0${newMeeting.startTime.minutes.toString()}` : newMeeting.startTime.minutes }
        </Dropdown.Toggle>

        <StyledDropDown>
          {validMinutes.map((vm) => {
            return (
              <Dropdown.Item key={vm} onClick={() => setNewMeeting({ ...newMeeting, startTime: {
                ...newMeeting.startTime,
                minutes: vm,
              } },
              )}>{ vm < 10 ? `0${  vm.toString()}` : vm.toString()}</Dropdown.Item>
            );
          })}
        </StyledDropDown>
      </Dropdown>
      <StyledTimePickerSeperator>-</StyledTimePickerSeperator>
      <Dropdown>
        <Dropdown.Toggle as={StyledTimePicker} variant="primary" id="dropdown-basic">
          {newMeeting.endTime.hours}
        </Dropdown.Toggle>
        <StyledDropDown>
          {validHours.map((vh) => {
            return (
              <Dropdown.Item key={vh} onClick={() => setNewMeeting({ ...newMeeting, endTime: {
                ...newMeeting.endTime,
                hours: vh,
              } },
              )}
              disabled={vh < newMeeting.startTime.hours}>{vh}</Dropdown.Item>
            );
          })}
        </StyledDropDown>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={StyledTimePicker} variant="primary" id="dropdown-basic">
          {newMeeting.endTime.minutes < 10 ? `0${newMeeting.endTime.minutes.toString()}` : newMeeting.endTime.minutes }
        </Dropdown.Toggle>

        <StyledDropDown>
          {validMinutes.map((vm) => {
            return (
              <Dropdown.Item key={vm} onClick={() => setNewMeeting({ ...newMeeting, endTime: {
                ...newMeeting.endTime,
                minutes: vm,
              } },
              )}>{ vm < 10 ? `0${  vm.toString()}` : vm.toString()}</Dropdown.Item>
            );
          })}
        </StyledDropDown>
      </Dropdown>
    </StyledTimePickerContainer>
  );
};

export default TimePicker;
