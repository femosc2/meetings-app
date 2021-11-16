import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../../../../../../interfaces';
import { Meeting } from '../../../../../../models';
import { IStore } from '../../../../../../store';
import { StyledAttendeeButton } from './Attendee.style';

interface IProps {
    email: string,
    newMeeting: Meeting,
    setNewMeeting: (meeting: Meeting) => void;
}

const Attendee: React.FC<IProps> = (props) => {
  const { email, newMeeting, setNewMeeting } = props;
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector<IStore, IUser>(state => state.auth.user);
  return (
    <StyledAttendeeButton
      size="lg"
      onMouseEnter={() => user.email !== email && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => user.email !== email &&
         setNewMeeting({ ...newMeeting, attendees: newMeeting.attendees.filter(a => a.email !== email) })}
      data-testid={'attendee'}>
      {!isHovered ? email : 'Remove'}
    </StyledAttendeeButton>
  );
};

export default Attendee;
