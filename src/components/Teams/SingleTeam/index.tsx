import React, { useState } from 'react';
import { Team, User } from '../../../models';
import { TRANSLATIONS } from '../../../resources/translations';
import AttendeePicker from '../AttendeePicker';
import { StyledSingleTeamContainer, StyledExcuseButton } from '../Teams.styles';

interface IProps {
    team: Team,
    removeUserFromTeam: (team: Team) => void;
    users: User[];
}

const SingleTeam: React.FC<IProps> = (props) => {
  const { team, removeUserFromTeam, users } = props;
  const [localTeam, setLocalTeam] = useState(team);

  return (
    <StyledSingleTeamContainer>
      <h3>{team.name}</h3>
      <h4>@{team.shortName}</h4>
      <p>{team.description}</p>
      <StyledExcuseButton onClick={() => removeUserFromTeam(team)} variant={'danger'}>{TRANSLATIONS.excuseYourself}</StyledExcuseButton>
      <hr />
      <AttendeePicker sendReq={true} newTeam={localTeam} setNewTeam={setLocalTeam} users={users} />
    </StyledSingleTeamContainer>
  );
};

export default SingleTeam;
