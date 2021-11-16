import { StyledSlot } from '../Slots.styles';
import React from 'react';
import { Meeting } from '../../../../models';
import Bookings from './Bookings';

interface IProps {
    meetings: Meeting[];
}

const Slot: React.FC<IProps> = (props) => {
  const { meetings } = props;
  return (
    <StyledSlot data-testId={'slot'}><Bookings meetings={meetings} /></StyledSlot>
  );
};

export default Slot;
