import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingBackground: {
    top: 0,
    width: '100%',
    position: 'fixed',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(5px)',
    webkitFilter: 'blur(5px)',
    opacity: 0.9,
    transform: 'scale(1.2)',
    zIndex: -10,
  },

  title: {
    fontSize: 80,
    lineHeight: '100px',
    color: '#FFFFFF',
    textShadow: '-2px 2px #412C7D',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '50px',
      marginBottom: theme.spacing(1),
    },
  },

  manBehindLaptop: {
    height: '80%',
    maxHeight: 400,
    width: '80%',
    maxWidth: 400,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginBottom: -20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      marginBottom: -10
    },
  },

  arrowBottom: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 100
    },
  }

}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.landingBackground} />
      <Grid container alignItems="center" direction="column">
        <Grid item container justifyContent='center'>
          <img
            src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'}
            alt="" className={classes.manBehindLaptop}
          />
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.title} align='center'>
            {'اینترکارسولار'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" align='center' style={{ color: 'white' }}>
            {'سومین دوره رویداد برخط'}
          </Typography>
        </Grid>
        <Grid item style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Typography align='center' component='p' variant="h4" className={classes.arrowText}>
            {'چه خبره؟'}
          </Typography>
          <img
            src={process.env.PUBLIC_URL + '/scroll-bottom.gif'}
            alt="" className={classes.arrowBottom}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Index;
