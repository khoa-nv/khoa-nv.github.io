import { makeStyles } from '@material-ui/core';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import style from './Avatar.Style';
import Logo from 'assets/img/logo.png';

const useStyle = makeStyles(style);

const Avatar: React.FC = (props: any): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div
      className={classes.avatarWrapper}
      >

        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
        >
          <img
            className={classes.avatarImg}
            src={Logo} alt="" />
        </Tilt>
      </div>
    </React.Fragment>
  )
}
export default Avatar;
