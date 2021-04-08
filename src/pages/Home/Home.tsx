import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '4rem',
    color: theme.font,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.welcomeMessage}>Welcome to the Code Editor!</div>
    </div>
  );
};

export default Home;
