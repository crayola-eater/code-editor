import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColours } from '../theme/colours';

const useStyles = makeStyles(() => ({
  button: {
    color: commonColours.white,
  },
}));

const SignIn: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const onLogin = () => {
    loginWithRedirect();
  };
  return (
    <Button className={classes.button} onClick={onLogin}>
      Sign in
    </Button>
  );
};

export default SignIn;
