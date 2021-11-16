import React, { useCallback, useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { Team, User } from '../../../../models';
import { TRANSLATIONS } from '../../../../resources/translations';
import { StyledDropDownMenu } from './AttendeeFilter.style';

interface IProps {
    newTeam: Team,
    setNewTeam: (member: User, teamId: string, team: Team) => void;
    users: User[],
}

const AttendeeFilter: React.FC<IProps> = (props) => {
  const { newTeam, setNewTeam, users } = props;
  const [filter, setFilter] = useState('');
  const onFilterChanged = useCallback((value: string) => {
    setFilter(value);
  },
  [setFilter],
  );
  return (
    <StyledDropDownMenu>
      <Form.Group className="mb-3" controlId="formBasicAttende">
        <Form.Control className="text-center"
          type="text" placeholder={TRANSLATIONS.enterEmailAddress} onChange={(e) => onFilterChanged(e.target.value)} />
        <hr />
      </Form.Group>
      {users.filter((u) => u.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && !newTeam.members.includes(u)).map((u, i) => {
        return (
          <Dropdown.Item key={i}
            onClick={() => setNewTeam(u, (newTeam._id as string), { ...newTeam,  members: [...newTeam.members, u] })}>{u.email}</Dropdown.Item>
        );
      })}
    </StyledDropDownMenu>
  );
};

export default AttendeeFilter;
