import { Dispatch } from 'redux';
import { removeActiveFiles, setEditorActiveFile } from '../../reducers/files/reducer';
import { RootState } from '../../store';

const getNewActiveFileId = (activeFilesIds: string[], numberOfActiveFiles: number, fileId: string): string => {
  const indexOfFileToBeRemoved = activeFilesIds.indexOf(fileId);
  if (indexOfFileToBeRemoved === numberOfActiveFiles - 1) {
    return activeFilesIds[indexOfFileToBeRemoved - 1];
  }
  return activeFilesIds[indexOfFileToBeRemoved + 1];
};

const closeFile = (fileId: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    const { editorActiveFile, activeFiles } = state.files;
    const numberOfActiveFiles = activeFiles.length;

    if (numberOfActiveFiles >= 2) {
      if (editorActiveFile === fileId) {
        const newActiveFileId = getNewActiveFileId(activeFiles, numberOfActiveFiles, fileId);
        if (editorActiveFile === fileId || editorActiveFile === newActiveFileId) {
          dispatch(setEditorActiveFile(newActiveFileId));
        }
      }
    } else {
      dispatch(setEditorActiveFile(null));
    }

    dispatch(removeActiveFiles(fileId));
  };
};

export default closeFile;
