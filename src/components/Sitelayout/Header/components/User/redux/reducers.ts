
import { IAuth } from '../../../../../../interfaces';
import { AuthAction, SET_USER } from './actions';


const initialHeaderState: IAuth = {
  user: {
    isLoggedIn: false,
    email: undefined,
    token: '',
  },
};
  
export const auth = (state: IAuth = initialHeaderState, action: AuthAction): IAuth  => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.user,
    };
  }
  return state;
};
