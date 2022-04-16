import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  withWidth,
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
      lineHeight: '65px',
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
      lineHeight: '50px',
      marginBottom: theme.spacing(1),
    },
  },

  manBehindLaptop: {
    maxHeight: 400,
    width: '80%',
    maxWidth: 400,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 29,
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

function Index({ width }) {
  const classes = useStyles();
  return (
    <section className={classes.section} style={{ overflowX: 'hidden' }}>
      <div className={classes.landingBackground} />
      <Grid container alignItems="center" justifyContent='center' spacing={4}>
        <Grid container item alignItems="center" justifyContent='center' direction="column" xs={12} sm={6}>
          {width != 'xs' &&
            <Grid item container justifyContent='center'>
              <img
                src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'}
                alt="" className={classes.manBehindLaptop}
              />
            </Grid>
          }
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
        </Grid>

        <Grid container item alignItems="center" justifyContent='center' direction="column" xs={12} sm={6} spacing={2}>
          <Grid item>
            <Typography variant="h1" className={classes.title} align='center'>
              {'نتایج مرحله ۱ اومد!'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" align='center' style={{ color: 'white' }}>
              {'اسامی پذیرفته‌شدگان مرحله‌ی اول را می‌توانید در فایل زیر مشاهده کنید:'}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large' color='secondary' disabled>
              {'بارگیری نتایج'}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Typography align='center' component='p' variant="h4" className={classes.arrowText}>
          {'چه خبره؟'}
        </Typography>
        <img
          src={process.env.PUBLIC_URL + '/scroll-bottom.gif'}
          alt="" className={classes.arrowBottom}
        />
      </div> */}

    </section>
  );
}

export default withWidth()(Index);
