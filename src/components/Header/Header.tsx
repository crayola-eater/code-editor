import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Toolbar, Typography, Switch } from '@material-ui/core';
import DarkModeIcon from '@material-ui/icons/Brightness2';
import { toggleDarkMode } from '../../store/reducers/darkmode/reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import UnauthenticatedButtons from './UnauthenticatedButtons';
import AuthenticatedButtons from './AuthenticatedButtons';

const useStyles = makeStyles({
  title: {
    flex: 1,
  },
});

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => dispatch(toggleDarkMode());

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
