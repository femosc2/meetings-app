import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { IMeetingTime } from '../../../../../../interfaces';
import { Meeting } from '../../../../../../models';
import { TRANSLATIONS } from '../../../../../../resources/translations';
import { MARGINS } from '../../../../../../variables/sizesAndMargins';
import useIsCompact from '../../../../../../hooks/isCompact';
import { StyledBookingHeader, StyledBooking } from './Booking.style';


interface IProps {
    meeting: Meeting;
    borderColor: string;
}

const Booking: React.FC<IProps> = (props) => {
  const { meeting, borderColor } = props;
  const { startTime, endTime, attendees, name } = meeting;

  const [isMinimized, setIsMinimized] = useState(false);

  const isCompact = useIsCompact();

  const calcHeight = (start: IMeetingTime, end: IMeetingTime): number => {
    return start.minutes === 30 ?
      ((end.hours + (end.minutes / 60)) - (start.hours + (start.minutes / 60)) + MARGINS.calendarSlotHalfMargin / 100)
      :
      (end.hours + (end.minutes / 60)) - (start.hours + (start.minutes / 60));
  };

  return (
    <StyledBooking
      borderColor={borderColor}
      isMinimized={isMinimized}
      topMargin={startTime.minutes}
      height={isMinimized ? 0.75 : calcHeight(startTime, endTime) }>
      <StyledBookingHeader>
        <h4>{name}</h4>
        {!isCompact && <Button onClick={() => setIsMinimized(!isMinimized)}>{isMinimized ? TRANSLATIONS.expand : TRANSLATIONS.collapse}</Button>}
      </StyledBookingHeader>
      <h5>{startTime.hours}:{startTime.minutes < 10 ?
        `0${startTime.minutes.toString()  }` : startTime.minutes} - {endTime.hours}:{endTime.minutes < 10 ?
        `0${endTime.minutes.toString()  }` : endTime.minutes}</h5>
      <hr />
      
      <ul>
        <h5>{TRANSLATIONS.attendees}:</h5>
        <hr />
        {attendees.map((a, i) => {
          return (
            <li key={i}>{a.email}</li>
          );
        })}
      </ul>
    </StyledBooking>
  );
};

export default Booking;
