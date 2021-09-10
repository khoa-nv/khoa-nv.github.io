import React from 'react';
import styles from './HomePage.Style'
import { withStyles } from '@material-ui/styles';
import Avatar from 'Components/Avatar/Avatar';
import { Grid, Hidden } from '@material-ui/core';
import Ellipse from 'assets/img/ellipse.svg';
import Intro from 'Components/Intro/Intro';

type Props = {
  classes: any
};
type State = {};
const HomePage = withStyles(styles)(
  class Home extends React.Component<Props, State> {
    state: State = {
    };
    render() {
      const { classes } = this.props;

      return (
        <div className={classes.background}>
          <Hidden mdUp>
            <Grid item md={5} sm={12}>
              <Avatar></Avatar>
            </Grid>
          </Hidden>

          <Hidden smDown >
            <img
              className={classes.ellipse}
              src={Ellipse} alt="" /> </Hidden>

          <Grid
            container
            alignContent="center"
          >
            <Grid item md={7} sm={12}>
              <Intro />
            </Grid>
            <Hidden smDown>
              <Grid item md={5} sm={12}>
                <Avatar></Avatar>
              </Grid>
            </Hidden>
          </Grid>


        </div>
      )
    }
  })
export default HomePage;
