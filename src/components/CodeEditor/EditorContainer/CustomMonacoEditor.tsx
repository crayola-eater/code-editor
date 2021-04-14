import Editor, { OnChange } from '@monaco-editor/react';
import React, { useRef, useState } from 'react';
import supportedExtensions, { SupportedExtensions } from '../../../constants/supportedExtensions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import UserFile from '../../../types/UserFile';
import Loading from '../../common/Loading/Loading';
import { updateFileCode } from '../../../store/reducers/files/reducer';

interface CustomMonacoEditorProps {
  activeFile: UserFile;
}

const DEBOUNCE_DELAY_MS = 1000;

const CustomMonacoEditor: React.FC<CustomMonacoEditorProps> = ({ activeFile }) => {
  const [code, setCode] = useState(activeFile.code);
  const language = supportedExtensions[activeFile.extension.toUpperCase() as keyof SupportedExtensions];
  const darkMode = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const lastExecuted = useRef(Date.now() - 1000);

  const onChange: OnChange = (newCode = '') => {
    setCode(newCode);
    if (Date.now() - lastExecuted.current > DEBOUNCE_DELAY_MS) {
      lastExecuted.current = Date.now();
      dispatch(updateFileCode({ fileId: activeFile.id, newCode }));
    }
  };

  return (
    <Editor
      width="100%"
      height="100%"
      language={language.toLowerCase()}
      theme={darkMode ? 'vs-dark' : 'vs-light'}
      value={code}
      loading={<Loading />}
      onChange={onChange}
    />
  );
};

export default CustomMonacoEditor;
