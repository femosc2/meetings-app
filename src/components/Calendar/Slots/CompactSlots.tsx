import React from 'react';
import { Meeting } from '../../../models';
import Booking from './Slot/Bookings/Booking';

interface IProps {
  meetings: Meeting[];
}

const CompactSlots: React.FC<IProps> = ({ meetings }) => {
  return (
    <ul data-testId={'compactSlots'}>
      {meetings.sort((a,b ) => a.startTime.hours - b.startTime.hours).map((m, i) => {
        return (
          <Booking key={i} meeting={m} borderColor='rgba(0,0,0,0)' />
        );
      })}
    </ul>
  );
};

export default CompactSlots;
