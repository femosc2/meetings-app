import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Team, User } from '../../../models';
import { TRANSLATIONS } from '../../../resources/translations';
import { createTeam } from '../../../utils/http';
import { setSnackbar } from '../../Global/redux/actions';
import AttendeePicker from '../AttendeePicker';
import { StyledSingleTeamContainer, StyledAddSymbol } from '../Teams.styles';

interface IProps {
    users: User[];
    setTeams: (team: Team) => void;
}

const emptyTeam = {
  name: '',
  shortName: '',
  description: '',
  members: [],
};

const CreateTeam: React.FC<IProps> = ({ users, setTeams }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTeam, setNewTeam] = useState<Team>(emptyTeam);

  const dispatch = useDispatch();

  const createNewTeam = async () => {
    createTeam(newTeam).then((res) => {
      dispatch(setSnackbar({
        time: 5000,
        type: 'success',
        value: TRANSLATIONS.teamCreated,
        isVisible: true,
      }));
      setTeams(res);
      setNewTeam(emptyTeam);
      setIsEditMode(false);
    }).catch((e) => {
      dispatch(setSnackbar({
        time: 5000,
        type: 'danger',
        value: e.message,
        isVisible: true,
      }));
    });
  };

  return (
    <StyledSingleTeamContainer onClick={() => setIsEditMode(true)} data-testid={'createTeam'}>
      {!isEditMode ? <StyledAddSymbol>+</StyledAddSymbol> :
        <section>
          <Form.Group className="mb-3" controlId="formBasicMeetingName">
            <Form.Label visuallyHidden>{TRANSLATIONS.teamName}</Form.Label>
            <Form.Control className="text-center" onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
              type="text" placeholder={TRANSLATIONS.teamName} value={newTeam.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMeetingName">
            <Form.Label visuallyHidden>{TRANSLATIONS.teamNameShort}</Form.Label>
            <Form.Control className="text-center"
              value={newTeam.shortName} onChange={(e) => setNewTeam({ ...newTeam, shortName: e.target.value })}
              type="text" placeholder={TRANSLATIONS.teamNameShort} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label visuallyHidden>{TRANSLATIONS.description}</Form.Label>
            <Form.Control minLength={1} required as="textarea" rows={3} value={newTeam.description} placeholder={TRANSLATIONS.description}
              onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
            />
          </Form.Group>
          <hr />
          <AttendeePicker sendReq={false} newTeam={newTeam} setNewTeam={setNewTeam} users={users} />
          <hr />
          <Button onClick={() => createNewTeam()}>{TRANSLATIONS.createTeam}</Button>
        </section>}
    </StyledSingleTeamContainer>
  );
};

export default CreateTeam;
