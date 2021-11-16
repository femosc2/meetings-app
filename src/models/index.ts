export type RegisterResponse = null;

export type UserLogin = {
    email: string,
    password: string,
}

export type RegisterNewUserRequest = UserLogin & {
    name: string,
}

export type LoginRequest = {
    email: string,
    password: string,
}

export  type LoginResponse = {
    message: string;
    token: string;
    email: string;
    name: string;
}

export type User = {
    _id: string,
    email: string,
}

export type Meeting = {
    name: string,
    description: string,
    attendees: User[],
    startTime: {
        hours: number,
        minutes: number,
    },
    endTime: {
        hours: number,
        minutes: number,
    },
    date: string,
    _id?: string,
}

export type MeetingResponse = Meeting & {
    id: number;
}

export type MeetingSearchDate =  'ALL' | 'UPCOMING' | 'PAST' | 'TODAY'

export type Team = {
    name: string,
    shortName: string,
    description: string,
    members: User[],
    _id?: string,
    }
