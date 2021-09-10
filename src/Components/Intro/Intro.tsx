import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from './Intro.Style';
import pdf from 'assets/files/resume.pdf';

const useStyle = makeStyles(style);

const Intro: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.introWWrapper}>
        <div className={classes.name}>

          <p className={classes.h1}>
            Khoa
          </p>
          <div className={classes.surnameWrapper}>

            <p className={classes.h3}>
              Nguyen
            </p>
            <span
              className={classes.span}
            >
              Who is he?
            </span>
          </div>
        </div>
        <div
          className={classes.titleWrapper}
        >
          <span
            className={classes.title1}
          >
            I am a Software Developer 🚀 having an experience of building responsive Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. Learning Mobile application with React Native now.

          </span>
        </div>
        <div className={classes.actionWrapper}>
          <Button
            className={classes.actionButton}
            href={pdf}
            target="_blank"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Intro;
