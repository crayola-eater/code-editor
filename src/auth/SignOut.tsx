import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColours } from '../theme/colours';

const useStyles = makeStyles(() => ({
  button: {
    color: commonColours.white,
  },
}));

const SignOut: React.FC = () => {
  const { logout } = useAuth0();
  const classes = useStyles();
  const onLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <Button className={classes.button} onClick={onLogout}>
      Sign out
    </Button>
  );
};

export default SignOut;
