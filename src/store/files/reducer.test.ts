import { PayloadAction } from '@reduxjs/toolkit';
import UserFile from '../../types/UserFile';
import filesReducer, {
  addActiveFiles,
  FilesState,
  initialState,
  removeActiveFiles,
  setEditorActiveFile,
  setFiles,
  updateFileCode,
} from './reducer';

describe('files reducer', () => {
  it('should return the initial state if no known action is provided', () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  it('should set user files when action is setFiles', () => {
    const userFiles: UserFile[] = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: 'console.log("hello world");',
        extension: 'js',
      },
    ];
    const expectedState: FilesState = {
      ...initialState,
      activeFiles: [],
      userFiles,
    };
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });

  it('should add a new file id when action is addActiveFile', () => {
    const fileId = '1';
    const expectedState: FilesState = {
      ...initialState,
      activeFiles: [fileId],
    };
    expect(filesReducer(initialState, addActiveFiles(fileId))).toEqual(expectedState);
  });

  it('should remove a file id when action is removeActiveFile', () => {
    const fileId = '1';
    const modifiedInitialState: FilesState = {
      ...initialState,
      activeFiles: [fileId],
    };
    const expectedState: FilesState = {
      ...initialState,
      activeFiles: [],
    };
    expect(filesReducer(modifiedInitialState, removeActiveFiles(fileId))).toEqual(expectedState);
  });

  it('should update the code when action is updatedFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'console.log("Hello World")',
    };
    const modifiedInitialState: FilesState = {
      ...initialState,
      userFiles: [
        { id: '1', code: 'console.log("ABC")', name: 'index.js', relativePath: 'test/index.js', extension: 'js' },
      ],
    };
    const expectedState: FilesState = {
      ...modifiedInitialState,
      userFiles: [{ ...modifiedInitialState.userFiles[0], code: payload.newCode }],
    };
    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
  });

  it('should throw an error when action is updatedFileCode but file does not exist', () => {
    const payload = {
      fileId: '2',
      newCode: 'console.log("Hello World")',
    };
    const modifiedInitialState: FilesState = {
      ...initialState,
      userFiles: [
        { id: '1', code: 'console.log("ABC")', name: 'index.js', relativePath: 'test/index.js', extension: 'js' },
      ],
    };
    expect(() => filesReducer(modifiedInitialState, updateFileCode(payload))).toThrowError(/no file with id 2 found/i);
  });

  it("should set the editor's active file when action is setEditorActiveFile", () => {
    const fileId = '1';
    const expectedState: FilesState = {
      ...initialState,
      editorActiveFile: fileId,
    };
    expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(expectedState);
  });
});
