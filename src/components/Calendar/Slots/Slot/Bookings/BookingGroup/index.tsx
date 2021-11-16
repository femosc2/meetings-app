/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Meeting } from '../../../../../../models';
import { TRANSLATIONS } from '../../../../../../resources/translations';
import COLORS from '../../../../../../variables/colors';
import isCompact from '../../../../../../hooks/isCompact';
import Booking from '../Booking';
import { StyledBookingHeader } from '../Booking/Booking.style';
import { StyledBookingGroupContainer } from './BookingGroup.styles';

interface IProps {
    meetings: Meeting[],
}

const BookingGroup: React.FC<IProps> = (props) => {
  const { meetings } = props;
  const [isMinimized, setIsMinimized] = useState(true);
  return (
    <StyledBookingGroupContainer isMinimized={isMinimized}>
      <StyledBookingHeader>
        <h4>{meetings.map((m) => ` ${m.name  }`).toString()}</h4>
        <Button onClick={() => setIsMinimized(!isMinimized)}>{isMinimized ? TRANSLATIONS.expand : TRANSLATIONS.collapse}</Button>
      </StyledBookingHeader>
      {meetings.map((m, i) => {
        return (
          <Booking borderColor={COLORS.teal} key={i} meeting={m} />
        );
      })}
    </StyledBookingGroupContainer>
  );
};

export default BookingGroup;
