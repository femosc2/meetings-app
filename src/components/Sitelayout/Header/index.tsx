import React from 'react';
import User from './components/User';
import { Navbar, Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import useIsCompact from '../../../hooks/isCompact';
import { TRANSLATIONS } from '../../../resources/translations';

const Header: React.FC = () => {
  const isCompact = useIsCompact();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-testid="header">
      <Container>
        {isCompact && <Navbar.Brand href="#home">{TRANSLATIONS.meetingsApp}</Navbar.Brand>}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Navigation />
          <User />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
