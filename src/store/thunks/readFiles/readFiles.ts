import CustomFile from '../../../types/CustomFile';
import UserFile from '../../../types/UserFile';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { setFiles } from '../../reducers/files/reducer';

const readSingleFile = (file: CustomFile): Promise<UserFile> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const { name, webkitRelativePath = '' } = file;
      const id = nanoid();
      const code = 'string' === typeof reader.result ? reader.result : '';
      const [extension] = name.match(/(?<=\.)[^.]+$/i) ?? [''];
      resolve({
        id,
        name,
        code,
        extension,
        relativePath: webkitRelativePath,
      });
    });
    reader.readAsText(file);
  });
};

const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises: Promise<UserFile>[] = Array.from({ length: files.length }, (_, i) => readSingleFile(files[i]));
  const userFiles = await Promise.all(promises);
  dispatch(setFiles(userFiles));
});

export default readFiles;
