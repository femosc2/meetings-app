import axios from 'axios';
import { LoginRequest, LoginResponse, Meeting, MeetingResponse, MeetingSearchDate, RegisterNewUserRequest, Team, User } from '../models';
import store from '../store';

export const registerUser = async (user: RegisterNewUserRequest): Promise<void> => {
  await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, user);
};

export const login = async (user: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`, user);
  return response.data;
};

export const getUsers = async(): Promise<User[]> => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_API}/users`, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });
  return response.data;
};

export const addMeeting = async(meeting: Meeting): Promise<MeetingResponse[]> => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API}/meetings`, meeting, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });
  return response.data;
};

export const getAllMeetings = async(): Promise<MeetingResponse[]> => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_API}/meetings?period=all`, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });

  return response.data;
};

export const getTeams = async(): Promise<Team[]> => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_API}/teams`, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });
  return response.data;
};

export const createTeam = async(team: Team): Promise<Team> => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API}/teams`, team, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });
  return response.data;
};

export const removeSelfFromTeam = async(id: string): Promise<Team> => {
  const response = await axios.patch(`${process.env.REACT_APP_BASE_API}/teams/${id}/?action=remove_member`, null, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });
  return response.data;
};

export const addMembertoTeam = async(id: string, user: User): Promise<Team> => {
  const response =
   await axios.patch(`${process.env.REACT_APP_BASE_API}/teams/${id}/?action=add_member&userId=${user._id}&email=${user.email}`, null, {
     headers: {
       'Authorization': store.getState().auth.user.token,
     },
   });
  return response.data;
};

export const getMeetingsForPeriod = async(period: MeetingSearchDate, term = ''): Promise<MeetingResponse[]> => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_API}/meetings?period=${period}&search=${term}`, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });

  return response.data;
};

export const addUserToMeeting = async(id: string, user: User): Promise<MeetingResponse[]> => {
  const response =
  await axios.patch(`${process.env.REACT_APP_BASE_API}/meetings/${id}?action=add_attendee&userId=${user._id}&email=${user.email}`, null, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });

  return response.data;
};

export const removeUserFromMeeting = async(id: string): Promise<MeetingResponse> => {
  const response =
  await axios.patch(`${process.env.REACT_APP_BASE_API}/meetings/${id}?action=remove_attendee`, null, {
    headers: {
      'Authorization': store.getState().auth.user.token,
    },
  });

  return response.data;
};
