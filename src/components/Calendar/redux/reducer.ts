import { ICalendar } from '../../../interfaces';
import { CalendarAction, SET_DATE } from './actions';

const initialHeaderState: ICalendar = {
  date: new Date(),
};
  
export const calendar = (state: ICalendar = initialHeaderState, action: CalendarAction): ICalendar  => {
  switch (action.type) {
  case SET_DATE:
    return {
      ...state,
      date: action.date,
    };
  }
  return state;
};
