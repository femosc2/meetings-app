import React from 'react';
import { Meeting } from '../../../models';
import Slot from './Slot';
import { StyledSlotsContainer } from './Slots.styles';

interface IProps {
  meetings: Meeting[];
}

const Slots: React.FC<IProps> = ({ meetings }) => {
  const slots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  return (
    <StyledSlotsContainer start={0} data-testid={'slots'}>
      {slots.map((s: number) => {
        return (
          <Slot key={s} meetings={meetings.filter((m) => m.startTime.hours === s)} />
        );
      })}
    </StyledSlotsContainer>
  );
};

export default Slots;
