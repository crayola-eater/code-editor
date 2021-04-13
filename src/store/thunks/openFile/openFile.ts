import { Dispatch } from 'redux';
import supportedExtensions from '../../../constants/supportedExtensions';
import FileViewerStructure from '../../../types/FileViewerStructure';
import { addActiveFiles, setEditorActiveFile } from '../../reducers/files/reducer';
import { RootState } from '../../store';

const openFile = (node: FileViewerStructure) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { extension: fileExtension = '', id: fileId, children } = node;

    if (children || !supportedExtensions.hasOwnProperty(fileExtension.toUpperCase())) {
      return;
    }

    const state = getState();
    const activeFiles = state.files.activeFiles;

    if (!activeFiles.includes(fileId)) {
      dispatch(addActiveFiles(fileId));
    }

    dispatch(setEditorActiveFile(fileId));
  };
};

export default openFile;
