import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import { IUser } from '../interfaces';
import { IStore } from '../store';
import RequireLogin from '../components/Global/RequireLogin';


const CalendarPage: React.FC  = () => {
  const user = useSelector<IStore, IUser>(state => state.auth.user);
  return (
    <Container data-testid={'calendarPage'}>
      { user.token !== '' ? <Calendar /> : <RequireLogin />}
    </Container>
  );
};

export default CalendarPage;
