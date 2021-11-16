import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Team, User } from '../../models';
import { TRANSLATIONS } from '../../resources/translations';
import { getTeams, getUsers, removeSelfFromTeam } from '../../utils/http';
import { setSnackbar } from '../Global/redux/actions';
import CreateTeam from './CreateTeam';
import SingleTeam from './SingleTeam';
import { StyledTeamContainer } from './Teams.styles';

const Teams: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const removeUserFromTeam = (teamToRemove: Team) => {
    removeSelfFromTeam((teamToRemove._id) as string).then(() => {
      setTeams(teams.filter(t => t !== teamToRemove));
      dispatch(setSnackbar({
        value: TRANSLATIONS.youAreExcused,
        time: 5000,
        isVisible: true,
        type: 'success',
      }));
    }).catch((e => {
      dispatch(setSnackbar({
        value: e.message,
        time: 5000,
        isVisible: true,
        type: 'danger',
      }));
    }));
  };

  const handleSetTeams = (team: Team) => {
    setTeams([...teams, team]);
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getTeams().then((res) => {
      setTeams(res);
      setIsLoading(false);
    }).catch((e) => {
      dispatch(setSnackbar({
        value: e.message,
        type: 'danger',
        time: 5000,
        isVisible: true,
      }));
    });
  }, []);

  return (
    !isLoading ? <StyledTeamContainer>
      {teams.map((t, i) => {
        return (
          <SingleTeam users={users} key={i} removeUserFromTeam={removeUserFromTeam} team={t} />
        );
      })}
      <CreateTeam users={users} setTeams={handleSetTeams} />
    </StyledTeamContainer> : <Spinner variant='primary' animation='border' />
  );
};

export default Teams;
