import { createSelector } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import FileViewerStructure from '../../../types/FileViewerStructure';
import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';

const selectFileViewerData = (userFiles: UserFile[]): FileViewerStructure => {
  /*
    Let "accumulated" be initialised with object literal.
    Loop over "userFiles". For each "file" therein:
      Let "pathParts" be the result of splitting "file.relativePath" on "/" delimiter.
      Let "fileNameWithExtension" be the last item in "pathParts" popped off.
      Let "target" be "accumulated".
      Loop over "pathParts". For each "part" therein:
        Let "target" be either:
          An existing item in "children" where "name" is "part"
          Or a newly created item (pushed to the end of "children") with schema: {id: string, name: "part", children: []}
      Let "file" be item with schema: {id: string, name: "fileNameExtension", extension: "extension"}.
      Add "file" to the "target.children" if "file" does not already exist. Otherwise, throw an error.
  */

  const result = userFiles.reduce<FileViewerStructure>(
    (acc, file) => {
      const pathParts = file.relativePath.split('/');
      const fileNameWithExtension = pathParts.pop()!;
      let target = acc;

      pathParts.forEach((folderName) => {
        const children = target.children!;
        const index = children.findIndex(({ name }) => folderName === name);
        if (-1 === index) {
          children.push({
            id: nanoid(),
            name: folderName,
            children: [],
          });
          target = children[children.length - 1];
        } else {
          target = children[index];
        }
      });

      if (target.children!.some(({ name }) => fileNameWithExtension === name)) {
        throw new Error(`Duplicate file encountered: ${file.relativePath}`);
      }

      target.children!.push({
        id: file.id,
        name: fileNameWithExtension,
        extension: file.extension,
      });

      return acc;
    },
    {
      id: 'root',
      name: 'root',
      children: [],
    }
  );

  if (result.children!.length > 1) {
    throw new Error(`Multiple root folders not currently supported: ${result.children?.length}`);
  }

  return result.children![0];
};

export default createSelector((state: RootState) => state.files.userFiles, selectFileViewerData);
