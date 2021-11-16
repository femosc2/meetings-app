import { Meeting } from '../../../models';

export const SET_CREATE_MEETING = 'SET_CREATE_MEETING';

export type MeetingsAction =
| { type: typeof SET_CREATE_MEETING, meeting: Meeting ; }


export const setCreateMeeting = (meeting: Meeting): MeetingsAction => ({
  meeting,
  type: SET_CREATE_MEETING,
});

