import { IUser } from '../../../../../../interfaces';

export const SET_USER = 'SET_USER';

export type AuthAction =
| { type: typeof SET_USER, user: IUser ; }


export const setUser = (user: IUser): AuthAction => ({
  user,
  type: SET_USER,
});

