import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Folder, FolderOpen } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';
import { useAppSelector } from '../../../store/hooks';
import selectFileViewerData from '../../../store/selectors/selectFileViewerData/selectFileViewerData';
import FileViewerStructure from '../../../types/FileViewerStructure';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 10px 10px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.font,
  },
  emptyMessage: {
    color: theme.font,
  },
}));

const FileViewer: React.FC = () => {
  const classes = useStyles();
  const fileViewerData = useAppSelector(selectFileViewerData);
  const renderTree = (node: FileViewerStructure) => {
    return (
      <TreeItem
        className={classes.treeItem}
        key={node.id}
        nodeId={node.id}
        label={node.name}
        endIcon={<ExtensionIcon extension={node.extension as any} />}
      >
        {node.children?.map(renderTree) ?? null}
      </TreeItem>
    );
  };

  if (0 === Object.keys(fileViewerData).length) {
    return <div className={classes.emptyMessage}>No files!</div>;
  }

  return (
    <TreeView className={classes.root} defaultCollapseIcon={<FolderOpen />} defaultExpandIcon={<Folder />}>
      {renderTree(fileViewerData)}
    </TreeView>
  );
};

export default FileViewer;
