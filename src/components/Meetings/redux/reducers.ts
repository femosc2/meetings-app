
import { IMeetings } from '../../../interfaces';
import { MeetingsAction, SET_CREATE_MEETING } from './actions';


const initialHeaderState: IMeetings = {
  createMeeting: {
    name: '',
    description: '',
    date: '',
    startTime: {
      hours: 8,
      minutes: 30,
    },
    endTime: {
      hours: 18,
      minutes: 30,
    },
    attendees: [
    ],
  },
};
  
export const meetings = (state: IMeetings = initialHeaderState, action: MeetingsAction): IMeetings  => {
  switch (action.type) {
  case SET_CREATE_MEETING:
    return {
      ...state,
      createMeeting: action.meeting,
    };
  }
  return state;
};
