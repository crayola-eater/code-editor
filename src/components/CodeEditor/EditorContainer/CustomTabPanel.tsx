import { makeStyles } from '@material-ui/core';
import React from 'react';
import UserFile from '../../../types/UserFile';

interface CustomTabPanelProps {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
}));

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ activeFile, editorActiveFile }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} role="tabpanel" hidden={editorActiveFile !== activeFile.id}>
      Monaco Code Editor
    </div>
  );
};

export default CustomTabPanel;
