import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setEditorActiveFile } from '../../../store/reducers/files/reducer';
import selectActiveFiles from '../../../store/selectors/selectActiveFiles/selectActiveFiles';
import CustomTabPanel from './CustomTabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: '1',
    height: '100%',
    overflow: 'hidden',
  },
  emptyMessage: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.font,
  },
}));

const EditorContainer: React.FC = () => {
  const classes = useStyles();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector((state) => state.files.editorActiveFile);
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);
  const dispatch = useAppDispatch();

  if (0 === activeFiles.length) {
    return <div className={classes.emptyMessage}>Select a file!</div>;
  }

  const onTabClick = (event: React.ChangeEvent<{}>, tabPosition: number) => {
    const activeFileId = activeFilesIds[tabPosition];
    if (activeFileId !== editorActiveFile) {
      dispatch(setEditorActiveFile(activeFileId));
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
          onChange={onTabClick}
        >
          {activeFiles.map((file) => (
            <Tab key={file.id} label={file.name} />
          ))}
        </Tabs>
      </AppBar>
      {activeFiles.map((file) => (
        <CustomTabPanel key={file.id} activeFile={file} editorActiveFile={editorActiveFile} />
      ))}
    </div>
  );
};

export default EditorContainer;
