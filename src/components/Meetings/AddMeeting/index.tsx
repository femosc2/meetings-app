import React, { FormEvent, useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Meeting } from '../../../models';
import { TRANSLATIONS } from '../../../resources/translations';
import { IStore } from '../../../store';
import { addMeeting } from '../../../utils/http';
import { setSnackbar } from '../../Global/redux/actions';
import { setCreateMeeting } from '../redux/actions';
import { StyledAddButton } from './AddMeeting.styles';
import AttendeePicker from './components/AttendeePicker';
import TimePicker from './components/TimePicker';

const AddMeeting: React.FC = () => {
  const createMeeting = useSelector<IStore, Meeting>(state => state.meetings.createMeeting);
  const [newMeeting, setNewMeeting] = useState(createMeeting);
  const { name, description, date, startTime, endTime } = newMeeting;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateMeeting(newMeeting));
  }, [newMeeting]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addMeeting(newMeeting).then(() => {
      dispatch(setSnackbar(
        {
          type: 'success',
          isVisible: true,
          value: `${name} will occur at ${date}
           ${startTime.hours}.${startTime.minutes}
            and end at ${endTime.hours}.${endTime.minutes}!`,
          time: 5000,
        }));
    }).catch(() => {
      dispatch(setSnackbar(
        {
          type: 'error',
          isVisible: true,
          value: 'Meeting was not created.',
          time: 5000,
        }));
    });
  };
  return (
    <Row>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicMeetingName">
          <Form.Label><h3>{TRANSLATIONS.meetingName}</h3></Form.Label>
          <Form.Control minLength={1} required type="text" placeholder={TRANSLATIONS.enterNameOfMeeting} value={name}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label><h3>{TRANSLATIONS.date}</h3></Form.Label>
          <Form.Control required type="date" placeholder={'date'}
            onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value.toString() })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label><h3>{TRANSLATIONS.time}</h3></Form.Label>
          <TimePicker
            newMeeting={newMeeting}
            setNewMeeting={setNewMeeting} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label><h3>{TRANSLATIONS.description}</h3></Form.Label>
          <Form.Control minLength={1} required as="textarea" rows={3} placeholder={TRANSLATIONS.enterDescriptionOfMeeting} value={description}
            onChange={(e) => setNewMeeting({ ...newMeeting, description:e.target.value })} />
        </Form.Group>
        <AttendeePicker newMeeting={newMeeting} setNewMeeting={setNewMeeting} />
        <StyledAddButton variant="primary" type="submit" size="lg">
          {TRANSLATIONS.createMeeting}
        </StyledAddButton>
      </Form>
    </Row>
  );
};

export default AddMeeting;
