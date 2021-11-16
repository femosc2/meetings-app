import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDatePickerContainer } from './DatePicker.styles';
import { Form } from 'react-bootstrap';
import { IStore } from '../../../store';
import { setDate } from '../redux/actions';

const DatePicker: React.FC = () => {
  const date = useSelector<IStore, Date>(state => state.calendar.date);
  const dispatch = useDispatch();
  return (
    <StyledDatePickerContainer>
      <section>
        <h3>{date.toLocaleString('en-UK', { month: 'long', year: 'numeric', day: 'numeric' })}</h3>
        <h4>{date.toLocaleString('en-UK', { weekday: 'long' })}</h4>
      </section>
      <section>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label visuallyHidden>Date</Form.Label>
          <Form.Control type="date" placeholder={'date'} onChange={(e) => dispatch(setDate(new Date(e.target.value)))}
            data-testid="datepicker" />
        </Form.Group>
      </section>
    </StyledDatePickerContainer>
  );
};

export default DatePicker;
