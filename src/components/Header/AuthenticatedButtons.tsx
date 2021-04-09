import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignOut from '../../auth/SignOut';
import OpenWorkspace from '../CodeEditor/OpenWorkspace/OpenWorkspace';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const AuthenticatedButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OpenWorkspace />
      <SignOut />
    </div>
  );
};

export default AuthenticatedButtons;
