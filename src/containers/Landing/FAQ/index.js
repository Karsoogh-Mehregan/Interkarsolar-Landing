import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';

import According from './According';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#ffc1f8',
  },

  image: {
    height: '100%',
    maxHeight: 400,
    width: '100%',
    maxWidth: 400,
  },

  title: {
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'سوالات متداول'}
        </Typography>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} md={6}>
            <According />
          </Grid>
          <Grid item xs={12} md={5} container justifyContent='center'>
            <img
              src={process.env.PUBLIC_URL + '/22.jpg'}
              alt="" className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>

    </section >
  );
}

export default Index;
