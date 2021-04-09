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
  },
});

const filesReducer = filesSlice.reducer;
export default filesReducer;
