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
    background: 'linear-gradient(to top right, #FE94F5, #A7CFE6)',
  },

  image: {
    height: '100%',
    maxHeight: 400,
    width: '100%',
    maxWidth: 400,
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography variant="h1" gutterBottom>
          {'سوالات متداول'}
        </Typography>
        <Grid container justify="space-between" alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <According />
          </Grid>
          <Grid item xs={12} md={5} container justifyContent='center'>
            <img
              src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'}
              alt="" className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>

    </section >
  );
}

export default Index;
