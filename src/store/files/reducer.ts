import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserFile from '../../types/UserFile';

export interface FilesState {
  userFiles: UserFile[];
  activeFiles: string[];
  editorActiveFile: string | null;
}

export const initialState: FilesState = {
  userFiles: [],
  activeFiles: [],
  editorActiveFile: null,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[]>) {
      state.userFiles = [...action.payload];
      state.activeFiles = [];
    },
    addActiveFiles(state, action: PayloadAction<string>) {
      state.activeFiles = [...state.activeFiles, action.payload];
    },
    removeActiveFiles(state, action: PayloadAction<string>) {
      state.activeFiles = state.activeFiles.filter((fileId) => fileId !== action.payload);
    },
    updateFileCode(state, action: PayloadAction<{ fileId: string; newCode: string }>) {
      const { fileId, newCode } = action.payload;
      const indexToUpdate = state.userFiles.findIndex(({ id }) => id === fileId);

      if (-1 === indexToUpdate) {
        throw new Error(`Failed to update file. No file with id ${fileId} found.`);
      }

      const updatedFile = { ...state.userFiles[indexToUpdate], code: newCode };

      state.userFiles = [
        ...state.userFiles.slice(0, indexToUpdate),
        updatedFile,
        ...state.userFiles.slice(indexToUpdate + 1),
      ];
    },
  },
});

const filesReducer = filesSlice.reducer;
export default filesReducer;
