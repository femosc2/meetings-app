import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { StyledNavItem, StyledNavLink } from './Navigation.styles';
import { TRANSLATIONS } from '../../../../../resources/translations';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <StyledNavItem as="li" isActive={location.pathname === '/calendar'}>
        <StyledNavLink isActive={location.pathname === '/calendar'}><Link to="/calendar">{TRANSLATIONS.calendar}</Link></StyledNavLink>
      </StyledNavItem>
      <StyledNavItem as="li" isActive={location.pathname === '/meetings'}>
        <StyledNavLink isActive={location.pathname === '/meetings'}><Link to="/meetings">{TRANSLATIONS.meetings}</Link></StyledNavLink>
      </StyledNavItem>
      <StyledNavItem as="li" isActive={location.pathname === '/teams'}>
        <StyledNavLink isActive={location.pathname === '/teams'}><Link to="/teams">{TRANSLATIONS.teams}</Link></StyledNavLink>
      </StyledNavItem>
    </Nav>
  );
};

export default Navigation;
