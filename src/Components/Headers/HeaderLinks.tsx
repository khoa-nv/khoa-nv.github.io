import React from 'react';
import CustomNavLink from '../NavLink/NavLink';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from './HeaderLinks.Style';

const useStyles = makeStyles(styles);

const HeaderLinks = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomNavLink
            to={{
              path: '/',
              label: "Home"
            }}
            className={classes.navLink}
          />
        </ListItem>
        {/* <ListItem
          className={classes.listItem}
        >

          <CustomNavLink
            to={{
              path: '/about',
              label: "About me"
            }} className={classes.navLink}
          />
        </ListItem> */}
      </List>
    </React.Fragment>
  );
}
export default HeaderLinks;