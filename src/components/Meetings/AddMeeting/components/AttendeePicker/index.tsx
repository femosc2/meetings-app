import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IUser } from '../../../../../interfaces';
import { Meeting, User } from '../../../../../models';
import { TRANSLATIONS } from '../../../../../resources/translations';
import { IStore } from '../../../../../store';
import { getUsers } from '../../../../../utils/http';
import Attendee from './Attendee';
import { StyledAddButton } from './Attendee/Attendee.style';
import AttendeeFilter from './AttendeeFilter';

interface IProps {
    newMeeting: Meeting,
    setNewMeeting: (meeting: Meeting) => void;
}

const AttendeePicker: React.FC<IProps> = (props) => {
  const { newMeeting, setNewMeeting } = props;
  const user = useSelector<IStore, IUser>(state => state.auth.user);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const response = getUsers();
    response.then(res => setUsers(res));
  }, []);
  return (
    <section>
      <h3>{TRANSLATIONS.attendees}</h3>
      <Dropdown>
        {user.email && <Attendee email={user.email} newMeeting={newMeeting} setNewMeeting={setNewMeeting} />}
        {newMeeting.attendees.map((a, i) => {
          return (
            <Attendee key={i} email={a.email} newMeeting={newMeeting} setNewMeeting={setNewMeeting} />
          );
        } )}
        <StyledAddButton size={'lg'} variant="success" id="dropdown-basic">
          +
        </StyledAddButton>

        <AttendeeFilter newMeeting={newMeeting} setNewMeeting={setNewMeeting} users={users} />
      </Dropdown>
      <br />
    </section>
  );
};

export default AttendeePicker;
