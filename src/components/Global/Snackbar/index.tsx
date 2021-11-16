import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISnackbar } from '../../../interfaces';
import { IStore } from '../../../store';
import { setSnackbar } from '../redux/actions';
import { StyledSnackbar } from './Snackbar.styles';

const Snackbar: React.FC = () => {
  const snackbar = useSelector<IStore, ISnackbar>(state => state.global.snackbar);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setSnackbar({ ...snackbar, isVisible: false }));
    }, snackbar.time);
  }, [snackbar.isVisible]);
  return (
    snackbar.isVisible ? <StyledSnackbar variant={snackbar.type}
      onClick={() => dispatch(setSnackbar({ ...snackbar, isVisible: false }))}>
      {snackbar.value}
    </StyledSnackbar> : null
  );
};

export default Snackbar;
