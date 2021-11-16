export const SET_DATE = 'SET_DATE';


export type CalendarAction =
| { type: typeof SET_DATE, date: Date ; }

export const setDate = (date: Date): CalendarAction => ({
  date,
  type: SET_DATE,
});
