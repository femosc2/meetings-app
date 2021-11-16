import React, { FormEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TRANSLATIONS } from '../../../../resources/translations';
import { StyledSearchContainer, StyledInputHeader } from './Search.styles';
import { Meeting, MeetingSearchDate } from '../../../../models';
import { getMeetingsForPeriod } from '../../../../utils/http';

interface IProps {
  setMeetings: (meetings: Meeting[]) => void;
}

const Search: React.FC<IProps> = ({ setMeetings }) => {
  const [date, setDate] = useState<MeetingSearchDate>('ALL');
  const [searchFor, setSearchFor] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getMeetingsForPeriod(date, searchFor).then((res) => {
      setMeetings(res);
    });
  };
  return (
    <StyledSearchContainer>
      <h2>
        {TRANSLATIONS.searchForMeetings}
      </h2>
      <hr />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Label><StyledInputHeader>{TRANSLATIONS.date}</StyledInputHeader></Form.Label>
        <Form.Control as='select' onChange={(e) => setDate((e.target.value) as MeetingSearchDate)} aria-label="Default select example">
          <option value="ALL">{TRANSLATIONS.all.toLocaleUpperCase()}</option>
          <option value="FUTURE">{TRANSLATIONS.upcoming.toLocaleUpperCase()}</option>
          <option value="PRESENT">{TRANSLATIONS.today.toLocaleUpperCase()}</option>
          <option value="PAST">{TRANSLATIONS.past.toLocaleUpperCase()}</option>
        </Form.Control>
        <Form.Label><StyledInputHeader>{TRANSLATIONS.searchFor}</StyledInputHeader></Form.Label>
        <Form.Control as="textarea" rows={3} value={searchFor}
          onChange={(e) => setSearchFor(e.target.value)} placeholder={TRANSLATIONS.searchUsingWordsWhichDescribeTheMeeting} />
        <Button variant="primary" type="submit" size="sm">
          {TRANSLATIONS.search}
        </Button>
      </Form>
    </StyledSearchContainer>
  );
};

export default Search;
