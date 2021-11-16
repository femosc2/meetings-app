import React from 'react';
import { Container } from 'react-bootstrap';
import { TRANSLATIONS } from '../resources/translations';


const NotFoundPage: React.FC  = () => {
  return (
    <Container data-testid={'notFoundPage'} className='text-center'>
      <h2>404</h2>
      <h3>{TRANSLATIONS.pageNotFound}</h3>
    </Container>
  );
};

export default NotFoundPage;
