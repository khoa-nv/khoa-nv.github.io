import React from 'react';

import { Grid, Hidden, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import style from './Sidebar.Style';
import zalo from 'assets/img/zalo.svg';

const useStyle = makeStyles(style);

const Sidebar: React.FC = (props: any): JSX.Element => {

  const classes = useStyle();
  return (
    <React.Fragment>
      <Hidden >
        <Grid
          container
          className={classes.sidebarContainer}
        >
          <Grid item>
            <IconButton
              className={classes.iconButton}
              href="mailto:contact.khoanv@gmail.com"
              target="_blank"
            >
             <i className="far fa-envelope"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconButton}
              href="https://facebook.com/khoanv.me"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://instagram.com/khoanv.me"
              target="_blank"
              className={classes.iconButton}
            >
              <i className="fab fa-instagram"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://github.com/khoa-nv"
              target="_blank"
              className={classes.iconButton}
            >
              <i className="fab fa-github"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://zalo.me/nguye_khoa"
              target="_blank"
              className={classes.iconButton}
            >
              <img
                className={classes.zaloIcon}
                src={zalo} alt="" />
            </IconButton>
          </Grid>
         
          <Hidden smDown>
            <Grid item>
              <div className={classes.verticleLine}> </div>
            </Grid>
          </Hidden>
        </Grid>
      </Hidden>
    </React.Fragment>
  )
}

export default Sidebar;