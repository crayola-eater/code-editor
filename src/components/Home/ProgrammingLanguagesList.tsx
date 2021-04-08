import React from 'react';
import { makeStyles } from '@material-ui/core';

import BlankFileIcon from '../../assets/images/blank-file.png';
import CssIcon from '../../assets/images/css3.png';
import GoIcon from '../../assets/images/go.png';
import HtmlIcon from '../../assets/images/html5.jpg';
import JavaIcon from '../../assets/images/java.svg';
import JavaScriptIcon from '../../assets/images/javascript.png';
import PhpIcon from '../../assets/images/php.svg';
import PythonIcon from '../../assets/images/python.png';
import RubyIcon from '../../assets/images/ruby.png';
import TypeScriptIcon from '../../assets/images/typescript.png';
import ReactIcon from '../../assets/images/react.png';

const useStyles = makeStyles(() => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px',
  },
}));

const ProgrammingLanguagesList: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={BlankFileIcon} className={classes.icon} alt="blank-file" />
      <img src={CssIcon} className={classes.icon} alt="css" />
      <img src={GoIcon} className={classes.icon} alt="go" />
      <img src={HtmlIcon} className={classes.icon} alt="html" />
      <img src={JavaIcon} className={classes.icon} alt="java" />
      <img src={JavaScriptIcon} className={classes.icon} alt="javascript" />
      <img src={PhpIcon} className={classes.icon} alt="php" />
      <img src={PythonIcon} className={classes.icon} alt="python" />
      <img src={RubyIcon} className={classes.icon} alt="ruby" />
      <img src={TypeScriptIcon} className={classes.icon} alt="typescript" />
      <img src={ReactIcon} className={classes.icon} alt="react" />
    </div>
  );
};

export default ProgrammingLanguagesList;
