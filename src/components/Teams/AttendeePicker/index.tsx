import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Team, User } from '../../../models';
import { TRANSLATIONS } from '../../../resources/translations';
import { addMembertoTeam } from '../../../utils/http';
import { setSnackbar } from '../../Global/redux/actions';
import { StyledMemberSection } from '../Teams.styles';
import AttendeeFilter from './AttendeeFilter';
import { StyledDropDownToggle } from './AttendeePicker.styles';

interface IProps {
    newTeam: Team,
    setNewTeam: (team: Team) => void;
    users: User[];
    sendReq: boolean;
}

const AttendeePicker: React.FC<IProps> = (props) => {
  const { newTeam, setNewTeam, users, sendReq } = props;

  const dispatch = useDispatch();

  const handlePick = (member: User, teamId: string, team: Team) => {
    if (!sendReq) {
      setNewTeam(team);
    } else {
      addMembertoTeam(teamId, member).then(() => {
        setNewTeam(team);
        dispatch(setSnackbar({
          value: TRANSLATIONS.memberAddedToTeam,
          time: 5000,
          isVisible: true,
          type: 'success',
        }));
      }).catch((e) => {
        dispatch(setSnackbar({
          value: e.message,
          time: 5000,
          isVisible: true,
          type: 'danger',
        }));
      });
    }
  };

  return (
    <section>
      <h3>{TRANSLATIONS.members}</h3>
      <Dropdown drop={'up'}>
        <StyledMemberSection>
          {newTeam.members.map((a) => {
            return (
              `${a.email}, `
            );
          } )}
        </StyledMemberSection>
        <StyledDropDownToggle size={'md'} variant="success" id="dropdown-basic">
          {TRANSLATIONS.addMember}
        </StyledDropDownToggle>

        <AttendeeFilter newTeam={newTeam} setNewTeam={handlePick} users={users} />
      </Dropdown>
      <br />
    </section>
  );
};

export default AttendeePicker;
