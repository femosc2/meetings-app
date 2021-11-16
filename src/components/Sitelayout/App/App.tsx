import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CalendarPage from '../../../pages/Calendar';
import MeetingsPage from '../../../pages/Meetings';
import TeamsPage from '../../../pages/Teams';
import { GlobalModal } from '../../Global/Modal';
import Header from '../Header';
import Snackbar from '../../Global/Snackbar';
import { TRANSLATIONS } from '../../../resources/translations';
import { setModal } from '../../Global/redux/actions';
import LoginOrRegisterForm from '../Header/components/User/components/LoginOrRegisterForm';
import { useDispatch } from 'react-redux';
import NotFoundPage from '../../../pages/NotFoundPage';

/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
/* eslint-enable @typescript-eslint/no-var-requires */


const App: React.FC  = () => {
  
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.includes('login')) {
      dispatch(setModal({
        children: <LoginOrRegisterForm formType={'login'} />,
        isVisible: true, heading: TRANSLATIONS.welcome }));
    } else if (location.pathname.includes('register')) {
      dispatch(setModal({
        children: <LoginOrRegisterForm formType={'register'} />,
        isVisible: true, heading: TRANSLATIONS.welcome }));
    }
  }, [location.pathname]);
  return (
    <main className="App" data-testid="app">
      <GlobalModal />
      <Snackbar />
      <Header />
      <Switch>
        <Route exact path="/" component={CalendarPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/meetings" component={MeetingsPage} />
        <Route path="/teams" component={TeamsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default App;
