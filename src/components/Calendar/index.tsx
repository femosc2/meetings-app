import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Meeting } from '../../models';
import { TRANSLATIONS } from '../../resources/translations';
import { IStore } from '../../store';
import { getAllMeetings } from '../../utils/http';
import useIsCompact from '../../hooks/isCompact';
import { StyledNoMeetings } from './Calendar.styles';
import DatePicker from './DatePicker';
import Slots from './Slots';
import CompactSlots from './Slots/CompactSlots';

const Calendar: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isCompact = useIsCompact();
  const chosenDate = useSelector<IStore, Date>(state => state.calendar.date).toISOString().substring(0,10);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    setIsLoading(true);
    getAllMeetings().then((res) => {
      setMeetings(res.filter((meeting) => meeting.date.substring(0,10) === chosenDate));
    }).then(() => {
      setIsLoading(false);
    }).catch((e) => {
      setErrorMessage(e);
    });
  }, [chosenDate]);
  return (
    <Row className="justify-content-center">
      <h2>{TRANSLATIONS.calendar}</h2>
      <hr />
      <DatePicker />
      {!isLoading ? meetings.length >= 1 ? !isCompact? <Slots meetings={meetings} /> : <CompactSlots meetings={meetings}  />
        :
        <StyledNoMeetings><h2>{TRANSLATIONS.noMeetings}</h2> <h3>{TRANSLATIONS.noMeetingsMessage}</h3></StyledNoMeetings>
        : <Spinner animation="border" variant="success" data-testid="spinner" />}
      {errorMessage !== '' && <h2>{errorMessage}</h2>}
    </Row>
  );
};

export default Calendar;
