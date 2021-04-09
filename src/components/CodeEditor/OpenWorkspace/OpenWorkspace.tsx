import { Button, makeStyles } from '@material-ui/core';
import React, { useRef } from 'react';
import { commonColours } from '../../../theme/colours';

const useStyles = makeStyles(() => ({
  button: {
    color: commonColours.white,
  },
  input: {
    display: 'none',
  },
}));

const OpenWorkspace: React.FC = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    directoryInputRef.current?.click();
  };

  const onFilesUploaded = (...args: any[]) => {
    console.log('Files uploaded', ...args);
  };

  return (
    <div>
      <Button className={classes.button} onClick={onClick}>
        Open Workspace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUploaded}
      />
    </div>
  );
};

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkspace;
