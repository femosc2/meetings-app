import React from 'react';
import { Card } from 'react-bootstrap';
import { Meeting, User } from '../../../../models';
import { TRANSLATIONS } from '../../../../resources/translations';
import Attendees from './Attendees';
import { StyledDateInHeader, StyledExcuseButton } from './MeetingCard.styles';

interface IProps {
    meeting: Meeting;
    users: User[];
    excuseYourSelfFromMeeting: (meeting: Meeting) => void;
    addUserToMeeting: (meetingId: string, user: User) => void;
}

const MeetingsCard: React.FC<IProps> = (props) => {
  const { meeting, users, excuseYourSelfFromMeeting, addUserToMeeting } = props;
  const { name, startTime, endTime, date } = meeting;
  return (
    <li>
      <Card>
        <Card.Body>
          <Card.Title>
            <StyledDateInHeader>{new Date(date).toLocaleString('en-UK', { month: 'long', year: 'numeric', day: 'numeric' })}</StyledDateInHeader>
            {' '} {startTime.hours}:{startTime.minutes === 0 ? `${startTime.minutes.toString()  }0` : startTime.minutes}
          -
            {endTime.hours}:{endTime.minutes === 0 ? `${endTime.minutes.toString()  }0` : endTime.minutes}</Card.Title>
          <Card.Text>
            {name}
          </Card.Text>
          <StyledExcuseButton
            onClick={() => excuseYourSelfFromMeeting(meeting)} variant="danger">{TRANSLATIONS.excuseYourself}
          </StyledExcuseButton>
        </Card.Body>
        <hr />
        <Attendees users={users} meeting={meeting} addUserToMeeting={addUserToMeeting} />
      </Card>
    </li>
  );
};

export default MeetingsCard;
