import { createStore, combineReducers } from 'redux';
import { globals } from '../components/Global/redux/reducers';
import { meetings } from '../components/Meetings/redux/reducers';
import { auth } from '../components/Sitelayout/Header/components/User/redux/reducers';
import { calendar } from '../components/Calendar/redux/reducer';

export function createTestStore() {
  const store = createStore(
    combineReducers({
      global: globals,
      auth,
      meetings,
      calendar,
    }),
  );
  return store;
}
