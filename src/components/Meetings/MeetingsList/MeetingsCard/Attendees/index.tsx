import React, { useCallback, useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { User, Meeting } from '../../../../../models';
import { TRANSLATIONS } from '../../../../../resources/translations';
import { StyledDropDownMenu, StyledFilterHeader, StyledAttendeesContainer } from './Attendees.styles';

interface IProps {
    meeting: Meeting;
    users: User[];
    addUserToMeeting: (meetingId: string, user: User) => void;
}

const Attendees: React.FC<IProps> = (props) => {
  const { users, addUserToMeeting } = props;
  const [meeting, setMeeting] = useState(props.meeting);
  const [filter, setFilter] = useState('');
  const onFilterChanged = useCallback((value: string) => {
    setFilter(value);
  },
  [setFilter],
  );

  const addUser = (attendee: User) => {
    setMeeting({ ...meeting, attendees: [...meeting.attendees, attendee] });
    addUserToMeeting((meeting._id as string), attendee);
  };
  return (
    <StyledAttendeesContainer>
      <strong>{TRANSLATIONS.attendees}</strong>: {meeting.attendees.map((a) => ` ${  a.email}`).toString()}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {TRANSLATIONS.addMember}
        </Dropdown.Toggle>

        <StyledDropDownMenu>
          <Form.Group className="mb-3" controlId="formBasicMeetingName">
            <Form.Label><StyledFilterHeader>{TRANSLATIONS.filterByName}</StyledFilterHeader></Form.Label>
            <Form.Control className="text-center"
              type="text" placeholder={TRANSLATIONS.enterEmailAddress} onChange={(e) => onFilterChanged(e.target.value)} />
            <hr />
          </Form.Group>
          {users.filter((u) => u.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
           && !meeting.attendees.includes(u)).map((u, i) => {
            return (
              <Dropdown.Item key={i}
                onClick={() => addUser(u)}>{u.email}</Dropdown.Item>
            );
          })}
        </StyledDropDownMenu>
      </Dropdown></StyledAttendeesContainer>
  );
};

export default Attendees;
