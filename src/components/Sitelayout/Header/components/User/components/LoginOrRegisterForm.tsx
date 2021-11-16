import React, { useEffect, useState } from  'react';
import { Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { IModal } from '../../../../../../interfaces';
import { TRANSLATIONS } from '../../../../../../resources/translations';
import { IStore } from '../../../../../../store';
import validateFields from '../../../../../../utils/fieldValidator';
import { login, registerUser } from '../../../../../../utils/http';
import { setModal, setSnackbar } from '../../../../../Global/redux/actions';
import { setUser } from '../redux/actions';
import { StyledErrorText, StyledLink, StyledSwitchSpan, StyledButton } from './LoginOrRegisterForm.styles';

interface IProps {
  formType: 'login' | 'register';
}

const LoginOrRegisterForm: React.FC<IProps> = (props) => {
  const [formType, setFormType] = useState<'login' | 'register'>(props.formType);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  
  useEffect(() => {
    if (formType === 'register' && password === confirmPassword) {
      setPasswordsMatch(true);
    } else if(formType === 'register' && password !== confirmPassword) {
      setPasswordsMatch(false);
      setErrorMessage(TRANSLATIONS.passwordsDoesNotMatch);
    }
    if (passwordsMatch) {
      setErrorMessage('');
    }
  }, [password, confirmPassword]);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const modal = useSelector<IStore, IModal>(state => state.global.modal);

  useEffect(() => {
    history.push(`${modal.fromUrl !== undefined ? modal.fromUrl.substring(1) : ''}/${formType}`);
  }, [location.state]);

  useEffect( () => () => {
    history.replace(`${location.pathname.split('/')
      .filter(pn => pn !== 'login' && pn !== 'register').toString().replace(',', '/')}`);
  }, [] );

  const handleRegister = async () => {
    if (validateFields([{
      type: 'email',
      value: email,
    },
    {
      type: 'password',
      value: password,
    }])) {
      if (password !== confirmPassword) {
        setErrorMessage(TRANSLATIONS.passwordsDoesNotMatch);
      } else {
        setIsLoading(true);
        registerUser({ email, password, name: email.substring(0, email.indexOf('@')) }).then(() => {
          login({ email, password }).then((response) => {
            dispatch(setUser({ email, isLoggedIn: true, token: response.token }));
            dispatch(setModal({ ...modal, isVisible: false }));
            dispatch(setSnackbar({ type: 'success', value: `${email} ${TRANSLATIONS.wasSuccessfullyRegistered}`, isVisible: true, time: 5000 }));
          });
        }).catch(() => {
          setErrorMessage(TRANSLATIONS.thisUserAlreadyExists);
          setIsLoading(false);
        });
      }
    } else {
      setErrorMessage(TRANSLATIONS.passwordValidation);
    }
  };

  const handleLogin = () => {
    login({
      email,
      password,
    }).then(({ email, token }) => {
      dispatch(setUser({ isLoggedIn: true, email, token }));
      dispatch(setModal({ isVisible: false }));
      dispatch(setSnackbar({ type: 'success', value: `${TRANSLATIONS.welcome} ${email}`, isVisible: true, time: 5000 }));
    }).catch(() => setErrorMessage(TRANSLATIONS.loginFailed));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formType === 'login') {
      handleLogin();
    } else {
      handleRegister();
    }
  };
  return (
    !isLoading ? <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{TRANSLATIONS.emailAddress}</Form.Label>
        <Form.Control type="email" required
          placeholder={TRANSLATIONS.enterEmailAddress} onChange={(e) => setEmail(e.target.value)} value={email} data-testid="emailField" />
        <Form.Text className="text-muted">
          {formType === 'register' && TRANSLATIONS.weWillNeverShareEmail}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{TRANSLATIONS.password}</Form.Label>
        <Form.Control required type="password" placeholder={TRANSLATIONS.password} onChange={(e) => setPassword(e.target.value)} value={password}
          data-testid="passwordField" />
      </Form.Group>
      {formType === 'register' && <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>{TRANSLATIONS.confirmPassword}</Form.Label>
        <Form.Control required type="password"
          placeholder={TRANSLATIONS.password} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
          data-testid="confirmPasswordField" />
      </Form.Group>}
      <StyledErrorText data-testid="errorMessage"> {errorMessage }</StyledErrorText>
      <StyledButton variant="primary" type="submit" data-testid="submit">
        {TRANSLATIONS.submit}
      </StyledButton>
      <br />
      {formType === 'login' ?
        <StyledSwitchSpan>{TRANSLATIONS.notAMember}
          <StyledLink onClick={() => setFormType('register')}>
            {TRANSLATIONS.here}</StyledLink> {TRANSLATIONS.toRegister}
        </StyledSwitchSpan>
        :
        <StyledSwitchSpan>{TRANSLATIONS.alreadyAMember}
          <StyledLink onClick={() => setFormType('login')}>{TRANSLATIONS.here}</StyledLink>
          {TRANSLATIONS.toLogin}
        </StyledSwitchSpan>}
    </Form> : <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">{TRANSLATIONS.loading}</span>
    </Spinner>
  );
};

export default LoginOrRegisterForm;
