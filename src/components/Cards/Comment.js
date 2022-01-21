import { Button, Card, Chip, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import { toPersianNumber } from '../../utils/translateNumber';

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
    padding: theme.spacing(2),
  },
  noPadding: {
    padding: '0px !important',
  },
  eventImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

const Index = ({
  name,
  description,
  comment,
  image = `${process.env.PUBLIC_URL}/default-profile.png`,
}) => {
  const classes = useStyles();
  const t = useTranslate();

  return (
    <Card className={classes.paper}>
      <Grid container justifyContent="space-between" alignItems='stretch' style={{ direction: 'rtl', height: '100%' }}>
        <Grid
          className={classes.noPadding}
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={5}>
          <img src={image} alt="" className={classes.eventImage} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={7}
          direction="column"
          spacing={2}
          className={classes.content}>
          <Grid item>
            <Typography align='right' variant="h3" className={classes.notificationTitle} gutterBottom>
              {name}
            </Typography>
            <Typography align='right' color="textSecondary">
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography align='right' variant="body1">
              {comment}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Index;