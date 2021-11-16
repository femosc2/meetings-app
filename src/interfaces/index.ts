import { ReactChild } from 'react';
import { Meeting } from '../models';

export interface IModal {
    isVisible: boolean,
    children?: ReactChild;
    heading?: string;
    fromUrl?: string;
}

export interface IUser {
    email?: string,
    isLoggedIn: boolean,
    token: string;
}

export interface IMeetings {
    createMeeting: Meeting;
}

export interface IGlobal {
    modal: IModal;
    snackbar: ISnackbar;
}

export interface ICalendar {
    date: Date;
}

export interface IField {
    type: 'email' | 'password';
    value: string,
}

export interface ISnackbar {
    type: string,
    value: string,
    isVisible: boolean,
    time: number,
}

export interface IAuth {
    user: IUser,
}

export interface IMeetingTime {
    hours: number,
    minutes: number,
}
