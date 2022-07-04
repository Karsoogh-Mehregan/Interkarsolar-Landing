import {
  Card,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  notificationTitle: {
    color: '#4d4a70',
  },
  paper: {
    padding: '0px !important',
    backgroundColor: 'rgb(255, 255, 255, 0.94)',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 1px 0rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    // '&:hover': {
    //   transform: 'translateY(-0.1rem) scale(1.01)',
    //   boxShadow: '0 0.5em 1rem -1rem rgba(0, 0, 0, 0.5)',
    // },
  },
  content: {
    padding: theme.spacing(4),
  },
  noPadding: {
    padding: '0px !important',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

const Index = ({
  name,
  description,
  comment,
  // image = `${process.env.PUBLIC_URL}/default-profile.png`,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.paper}>
      {/* <Grid container justifyContent="space-between" alignItems='stretch' style={{ direction: 'rtl', height: '100%' }}> */}
        {/* <Grid
          className={classes.noPadding}
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={5}>
          <img src={image} alt="" className={classes.image} />
        </Grid> */}
        <Grid
          item
          container
          xs={12}
          sm={12}
          direction="column"
          spacing={2}
          className={classes.content}>
          <Grid item>
            <Typography align='left' variant="h3" className={classes.notificationTitle} gutterBottom>
              {name}
            </Typography>
            <Typography align='left' color="textSecondary">
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography align='left' variant="body1">
              {comment}
            </Typography>
          </Grid>
        </Grid>
      {/* </Grid> */}
    </Card>
  );
};

export default Index;