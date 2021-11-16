import React from 'react';
import { Meeting } from '../../../../../models';
import COLORS from '../../../../../variables/colors';
import useIsCompact from '../../../../../hooks/isCompact';
import Booking from './Booking';
import BookingGroup from './BookingGroup';
import { StyledBookingsContainer } from './Bookings.style';

interface IProps {
    meetings: Meeting[],
}

const Bookings: React.FC<IProps> = ({ meetings }) => {
  const isCompact = useIsCompact();

  return (
    !isCompact && meetings.length < 3 ? <StyledBookingsContainer>
      {meetings.map((m, i) => {
        return (
          <Booking key={i} meeting={m} borderColor={COLORS.white} />
        );
      })}
    </StyledBookingsContainer> : <BookingGroup meetings={meetings} />
  );
};

export default Bookings;
