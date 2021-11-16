import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IAuth, ICalendar, IGlobal, IMeetings } from '../interfaces';
import { globals } from '../components/Global/redux/reducers';
import { auth } from '../components/Sitelayout/Header/components/User/redux/reducers';
import { meetings } from '../components/Meetings/redux/reducers';
import { calendar } from '../components/Calendar/redux/reducer';

export interface IStore {
  global: IGlobal;
  auth: IAuth;
  meetings: IMeetings;
  calendar: ICalendar;
}

export const reducers = combineReducers<IStore>({
  global: globals,
  auth,
  meetings,
  calendar,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware()),
);

export default reduxStore;
