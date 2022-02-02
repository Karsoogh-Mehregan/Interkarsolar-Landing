import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { React } from 'react';


const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: 'linear-gradient(to top right, #8204D5, #59A6FF)',
  },

  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },

  title: {
    margin: theme.spacing(0, 0, 7, 0),
  },
}));


function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'چه کارهایی قراره کنیم؟'}
        </Typography>

        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper} elevation={3}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={4}>
                  <img
                    src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'مرحله اول'}
                  </Typography>
                  <Typography variant="subtitle1">
                    در اینجا در مورد مرحله‌ی اول توضیح بدیم!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid
                container
                spacing={2}
                direction="row-reverse"
                alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'مرحله دوم'}
                  </Typography>
                  <Typography variant="subtitle1">
                    در اینجا در مورد مرحله دوم توضیح بدیم!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + '/spaceman-behind-laptop.png'} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'دوره تابستانه'}
                  </Typography>
                  <Typography variant="subtitle1">
                    در اینجا در مورد دوره‌ی تابستانه توضیح بدیم!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Container>


    </section>
  );
}

export default Index;