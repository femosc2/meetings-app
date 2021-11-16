import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../../../resources/translations';
import LoginOrRegisterForm from '../../Sitelayout/Header/components/User/components/LoginOrRegisterForm';
import { setModal } from '../redux/actions';
import { StyledRequireLoginContainer, StyledSpan } from './RequireLogin.styles';

const RequireLogin: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <StyledRequireLoginContainer data-testid={'requireLoginPage'}>
      <h2>{TRANSLATIONS.requireLogin}</h2>
      <h3>Click <StyledSpan onClick={() => dispatch(setModal({
        children: <LoginOrRegisterForm formType={'login'} />,
        isVisible: true, heading: TRANSLATIONS.welcome, fromUrl: location.pathname }))}>here</StyledSpan> to login</h3>
    </StyledRequireLoginContainer>
    
  );
};

export default RequireLogin;
