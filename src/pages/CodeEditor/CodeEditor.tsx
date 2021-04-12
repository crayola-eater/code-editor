import { makeStyles } from '@material-ui/core';
import React from 'react';
import FileViewer from '../../components/CodeEditor/FileViewer/FileViewer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  fileViewer: {
    display: 'flex',
    flex: '1',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px dashed black',
    maxWidth: '300px',
    overflow: 'auto',
  },
  codeEditorContainer: {
    flex: '3',
    height: '100%',
  },
}));

const CodeEditor: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.fileViewer}>
        <FileViewer />
      </div>
      <div className={classes.codeEditorContainer}>Editor Container</div>
    </div>
  );
};

export default CodeEditor;
