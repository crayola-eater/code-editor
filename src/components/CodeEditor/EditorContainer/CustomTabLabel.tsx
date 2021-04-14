import { makeStyles } from '@material-ui/core';
import React from 'react';
import UserFile from '../../../types/UserFile';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import closeFile from '../../../store/thunks/closeFile/closeFile';

interface CustomTabLabelProps {
  activeFile: UserFile;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
  },
  filename: {
    padding: '0px 5px',
    color: theme.font,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    color: theme.font,
  },
}));

const CustomTabLabel: React.FC<CustomTabLabelProps> = ({ activeFile }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    dispatch(closeFile(activeFile.id));
  };

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={activeFile.extension.toUpperCase() as any} />
      <div className={classes.filename}>{activeFile.name}</div>
      <CloseIcon className={classes.closeIcon} onClick={onClose} />
    </div>
  );
};

export default CustomTabLabel;
