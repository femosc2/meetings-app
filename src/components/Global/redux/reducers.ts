import { IGlobal } from '../../../interfaces';
import { GlobalAction, SET_MODAL, SET_SNACKBAR } from './actions';


const initialHeaderState: IGlobal = {
  modal: {
    isVisible: false,
    children: undefined,
    heading: 'Modal',
    fromUrl: 'meetings',
  },
  snackbar: {
    type: 'primary',
    value: 'Default snackbar value, you should never see this.',
    isVisible: false,
    time: 5000,
  },
};
  
export const globals = (state: IGlobal = initialHeaderState, action: GlobalAction): IGlobal  => {
  switch (action.type) {
  case SET_MODAL:
    return {
      ...state,
      modal: action.modal,
    };
  case SET_SNACKBAR:
    return {
      ...state,
      snackbar: action.snackbar,
    };
  }
  return state;
};
