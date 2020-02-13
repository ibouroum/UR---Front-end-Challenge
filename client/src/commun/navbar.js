import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: "#FFFFFF",
      },
      title: {
        backgroundColor: "primary",
      },
}));

 const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.app} >
        <Toolbar >
          <Typography color="primary" variant="h6" noWrap>
           Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;