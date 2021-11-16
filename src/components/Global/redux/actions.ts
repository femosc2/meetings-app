import { IModal, ISnackbar } from '../../../interfaces';


export const SET_MODAL = 'SET_MODAL';
export const SET_SNACKBAR = 'SET_SNACKBAR';

export type GlobalAction =
| { type: typeof SET_MODAL, modal: IModal ; }
| { type: typeof SET_SNACKBAR, snackbar: ISnackbar ; }

export const setModal = (modal: IModal): GlobalAction => ({
  modal,
  type: SET_MODAL,
});

export const setSnackbar = (snackbar: ISnackbar): GlobalAction => ({
  snackbar,
  type: SET_SNACKBAR,
});
