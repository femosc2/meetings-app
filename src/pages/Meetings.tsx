import React from 'react';
import AddMeeting from '../components/Meetings/AddMeeting';
import MeetingsList from '../components/Meetings/MeetingsList';
import { Tabs, Tab, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IStore } from '../store';
import { IUser } from '../interfaces';
import { TRANSLATIONS } from '../resources/translations';
import RequireLogin from '../components/Global/RequireLogin';

const MeetingsPage: React.FC  = () => {
  const user = useSelector<IStore, IUser>(state => state.auth.user);
  return (
    <Container>
      {user.token !== '' ? <Row className="justify-content-center" data-testid={'meetingsPage'}>
        <h2>{TRANSLATIONS.meetings}</h2>
        <hr />
        <Tabs defaultActiveKey="meetings" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="meetings" title={TRANSLATIONS.meetings}>
            <MeetingsList />
          </Tab>
          <Tab eventKey="addMeeting" title={TRANSLATIONS.addANewMeeting}>
            <AddMeeting />
          </Tab>
        </Tabs>
      </Row> : <RequireLogin />}
    </Container>
  );
};

export default MeetingsPage;
