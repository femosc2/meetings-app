import React, { useCallback, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Meeting, User } from '../../../models';
import MeetingsCard from './MeetingsCard';
import Search from './Search';
import { StyledMeetingCardsContainer } from './MeetingList.styles';
import { addUserToMeeting, getUsers, removeUserFromMeeting } from '../../../utils/http';
import { TRANSLATIONS } from '../../../resources/translations';
import { setSnackbar } from '../../Global/redux/actions';
import { useDispatch } from 'react-redux';

const MeetingsList: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  const addUserToTheMeeting = (meetingId: string, user: User) => {
    addUserToMeeting(meetingId, user).then(() => {
      dispatch(setSnackbar(
        {
          type: 'success',
          isVisible: true,
          value: TRANSLATIONS.memberAdded,
          time: 5000,
        }));
    }).catch((e) => {
      dispatch(setSnackbar(
        {
          type: 'danger',
          isVisible: true,
          value: e.message,
          time: 5000,
        }));
    });
  };

  const excuseYourselfFromMeeting = (meeting: Meeting) => {
    removeUserFromMeeting((meeting._id as string)).then(() => {
      dispatch(setSnackbar({
        time: 5000,
        value: TRANSLATIONS.youAreExcused,
        isVisible: true,
        type: 'success',
      }));
      setMeetings(meetings.filter(m => m !== meeting));
    }).catch(() => dispatch(setSnackbar({
      time: 5000,
      value: 'Failure',
      isVisible: true,
      type: 'danger',
    })));};

  const onExcuse = useCallback((meeting: Meeting) => {
    excuseYourselfFromMeeting(meeting);
  },
  [excuseYourselfFromMeeting],
  );

  const onAddAttendee = useCallback((meetingId: string, user: User) => {
    addUserToTheMeeting(meetingId, user);
  }, [addUserToTheMeeting]);

  return (
    <Row data-testid={'meetingsList'}>
      <Search setMeetings={setMeetings} />
      {meetings.length > 0 ?
        <StyledMeetingCardsContainer>
          {meetings.map((m, i) => {
            return (
              <MeetingsCard users={users} key={i} meeting={m} addUserToMeeting={onAddAttendee}
                excuseYourSelfFromMeeting={onExcuse} />
            );})
          }</StyledMeetingCardsContainer> :<h3 className={'text-center'}>{TRANSLATIONS.noMeetingsWithTheseFilters}</h3>}
    </Row>
  );
};

export default MeetingsList;
