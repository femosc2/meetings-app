import React from 'react';
import { Nav } from 'react-bootstrap';
import { StyledNavItem, StyledNavLink } from '../Navigation/Navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import LoginOrRegisterForm from './components/LoginOrRegisterForm';
import { IUser } from '../../../../../interfaces';
import { IStore } from '../../../../../store';
import { setModal } from '../../../../Global/redux/actions';
import { setUser } from './redux/actions';
import { TRANSLATIONS } from '../../../../../resources/translations';
import { useLocation } from 'react-router';

const User: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector<IStore, IUser>(state => state.auth.user);

  return (
    <Nav defaultActiveKey="/" as="ul">
      <StyledNavItem as="li">
        {user.email && <StyledNavLink>
          {TRANSLATIONS.welcome} {user.email}
        </StyledNavLink>}
      </StyledNavItem>
      
      <StyledNavItem as="li">
        {!user.isLoggedIn ?
          <StyledNavLink onClick={() => dispatch(setModal({
            children: <LoginOrRegisterForm formType={'login'} />,
            isVisible: true, heading: TRANSLATIONS.welcome, fromUrl: location.pathname }))}>
            {TRANSLATIONS.login}
          </StyledNavLink>
          :
          <StyledNavLink onClick={() => dispatch(setUser({ email: undefined, isLoggedIn: false, token: '' }))}>{
            TRANSLATIONS.logout}
          </StyledNavLink>}
      </StyledNavItem>
      <StyledNavItem as="li">{!user.isLoggedIn &&
         <StyledNavLink onClick={() => dispatch(setModal({
           children: <LoginOrRegisterForm formType={'register'} />,
           isVisible: true,
           fromUrl: location.pathname,
           heading: TRANSLATIONS.welcome }))}>
           {TRANSLATIONS.register}
         </StyledNavLink>}</StyledNavItem>
    </Nav>
  );
};

export default User;
