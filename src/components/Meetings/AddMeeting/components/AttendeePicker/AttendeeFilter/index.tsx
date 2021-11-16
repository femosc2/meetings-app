import React, { useCallback, useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { Meeting, User } from '../../../../../../models';
import { TRANSLATIONS } from '../../../../../../resources/translations';
import { StyledDropDownMenu, StyledFilterHeader } from './AttendeeFilter.style';

interface IProps {
    newMeeting: Meeting,
    setNewMeeting: (meeting: Meeting) => void;
    users: User[],
}

const AttendeeFilter: React.FC<IProps> = (props) => {
  const { newMeeting, setNewMeeting, users } = props;
  const [filter, setFilter] = useState('');
  const onFilterChanged = useCallback((value: string) => {
    setFilter(value);
  },
  [setFilter],
  );
  return (
    <StyledDropDownMenu>
      <Form.Group className="mb-3" controlId="formBasicMeetingName">
        <Form.Label><StyledFilterHeader>{TRANSLATIONS.filterByName}</StyledFilterHeader></Form.Label>
        <Form.Label><h4>{TRANSLATIONS.filterByName}</h4></Form.Label>
        <Form.Control className="text-center"
          type="text" placeholder={TRANSLATIONS.enterEmailAddress} onChange={(e) => onFilterChanged(e.target.value)} />
        <hr />
      </Form.Group>
      {users.filter((u) => u.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && !newMeeting.attendees.includes(u)).map((u, i) => {
        return (
          <Dropdown.Item key={i}
            onClick={() => setNewMeeting({ ...newMeeting, attendees: [...newMeeting.attendees, u] })}>{u.email}</Dropdown.Item>
        );
      })}
    </StyledDropDownMenu>
  );
};

export default AttendeeFilter;
