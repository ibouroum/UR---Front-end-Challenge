import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import SnackBar from '../commun/snackBar';
const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    maxHeight : 500,
    margin : 5,
    boxShadow: 3,
  },
  header: {
    width : 400,
    maxHeight: 50,
  },
  media: {
    height: 250,
    width:400
  },
  content: {
    width : 400,
    maxHeight: 180,
  },
  actions: {
    width : 400,
    maxHeight: 20,
  },
  chip: {
    margin : 5,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const {data,getDays} = props;
  return (
    <>
    {(data.status === 400 || data.status === 500) && <SnackBar variant="error" msg = {data.error} />}
    <Grid container justify="center">
    {data.isData === true && data.Data.map((data) =>
      <Card key={Math.random()} className={classes.root}>
      <CardHeader
        className={classes.header}
        title={data.name}
        subheader={"Submitted " + getDays(data.created_at) + " days ago by" + data.owner.login}
      />
      <CardMedia
        className={classes.media}
        image={data.owner.avatar_url}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description ? data.description : 'No description'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
      <Chip className={classes.chip} label={'Stars :' +data.stargazers_count+'k'} variant="outlined" />
      <Chip className={classes.chip} label={'Issues :' +data.open_issues_count+'k'}variant="outlined" />
      </CardActions>
    </Card>)
    }
    </Grid>
    
    </>
  );
}
export default Home;