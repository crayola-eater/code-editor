import { makeStyles } from '@material-ui/core';
import React from 'react';

import BlankFileIcon from '../../../assets/images/blank-file.png';
import CssIcon from '../../../assets/images/css3.png';
import GoIcon from '../../../assets/images/go.png';
import HtmlIcon from '../../../assets/images/html5.jpg';
import JavaIcon from '../../../assets/images/java.svg';
import JavaScriptIcon from '../../../assets/images/javascript.png';
import PhpIcon from '../../../assets/images/php.svg';
import PythonIcon from '../../../assets/images/python.png';
import RubyIcon from '../../../assets/images/ruby.png';
import TypeScriptIcon from '../../../assets/images/typescript.png';
import ReactIcon from '../../../assets/images/react.png';
import SupportedExtensions from '../../../constants/supportedExtensions';

const useStyles = makeStyles(() => ({
  icon: {
    height: '15px',
    width: '15px',
  },
}));

type ExtensionIconProps = {
  extension: keyof SupportedExtensions;
};

const extensionToImageSource: Readonly<{ [K in keyof SupportedExtensions]: string }> = {
  CSS: CssIcon,
  GO: GoIcon,
  HTML: HtmlIcon,
  JAVA: JavaIcon,
  JS: JavaScriptIcon,
  PHP: PhpIcon,
  JSON: JavaScriptIcon,
  PY: PythonIcon,
  RB: RubyIcon,
  TS: TypeScriptIcon,
  JSX: ReactIcon,
  TSX: ReactIcon,
};

const ExtensionIcon: React.FC<ExtensionIconProps> = ({ extension }) => {
  const classes = useStyles();
  const source = extensionToImageSource[extension] ?? BlankFileIcon;
  return <img src={source} className={classes.icon} alt={extension} />;
};

export default ExtensionIcon;
