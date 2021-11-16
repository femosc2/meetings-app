import React from 'react';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Teams from '../components/Teams';
import { IUser } from '../interfaces';
import { TRANSLATIONS } from '../resources/translations';
import { IStore } from '../store';
import RequireLogin from '../components/Global/RequireLogin';

const TeamsPage: React.FC  = () => {

  const user = useSelector<IStore, IUser>(state => state.auth.user);
  
  return (
    <Container className='justify-content-center' data-testid={'teamsPage'}>
      { user.token !== '' ? <Row>
        <h2>{TRANSLATIONS.teams}</h2>
        <hr />
        <Teams />
      </Row> : <RequireLogin />}

    </Container>
  );
};

export default TeamsPage;
