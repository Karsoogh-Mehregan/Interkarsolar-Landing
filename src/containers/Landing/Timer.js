import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';

import { toPersianNumber } from '../../utils/translateNumber';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(15, 0, 15, 0),
    zIndex: 5,
    position: 'relative',
    background: '#424EED',
  },

  timerContainer: {
    color: '#FFFFFF',
    textShadow: '-1px 1px #412C7D',
    margin: theme.spacing(11, 'auto', 1, 'auto'),
    textAlign: 'center',
    alignItems: 'center',
  },

  timerText: {
    display: 'inline-block',
    fontSize: '1.6rem',
    listStyleType: 'none',
    padding: '1em',
  },

  timerTextSpan: {
    display: 'block',
    fontSize: '3rem',
    marginBottom: theme.spacing(3),
  },

  title: {
    color: '#FFFFFF',
    textShadow: '-1px 1px #412C7D',
    margin: theme.spacing(0, 0, 5, 0),
  },

  image: {
    maxHeight: 350,
    width: '100%',
    maxWidth: 350,
  },
}));

function Index() {
  const classes = useStyles();

  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear()

  today = mm + "/" + dd + "/" + yyyy;

  //Enter the final time here
  const countDown = new Date("May 6, 2022 08:00:00").getTime();
  const interval = setInterval(function () {
    const now = new Date().getTime();
    let distance = countDown - now;
    if (distance < 0) {
      distance = 0;
    }
    document.getElementById("days").innerText = toPersianNumber(Math.floor(distance / (day)));
    document.getElementById("hours").innerText = toPersianNumber(Math.floor((distance % (day)) / (hour)));
    document.getElementById("minutes").innerText = toPersianNumber(Math.floor((distance % (hour)) / (minute)));
    document.getElementById("seconds").innerText = toPersianNumber(Math.floor((distance % (minute)) / second));
  }, 0);

  // clear interval
  useEffect(() => {
    return (() => {
      clearInterval(interval)
    })
  }, [])

  return (
    <section className={classes.section}>
      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'تا آزمون مرحله۲ چقدر مونده؟'}
        </Typography>
        <Grid container >
          <Grid item xs={12} md={6} container justifyContent='center'>
            <div className={classes.timerContainer}>
              <div id="countdown">
                <ul  style={{padding: '0'}}>
                  <Typography variant="h3" className={classes.timerText}><span id="seconds" className={classes.timerTextSpan}></span>ثانیه</Typography>
                  <Typography variant="h3" className={classes.timerText}><span id="minutes" className={classes.timerTextSpan}></span>دقیقه</Typography>
                  <Typography variant="h3" className={classes.timerText}><span id="hours" className={classes.timerTextSpan}></span>ساعت</Typography>
                  <Typography variant="h3" className={classes.timerText}><span id="days" className={classes.timerTextSpan}></span>روز</Typography>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent='center'>
            <img
              src={process.env.PUBLIC_URL + '/55.png'}
              alt="" className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
