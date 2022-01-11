/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { React, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/SpecialComponents/Homepage/Footer';
import WorkshopList from '../components/SpecialComponents/Homepage/WorkshopList';
import VideoDialogue from '../components/SpecialComponents/Homepage/VideoDialogue';
import LandingOurTeam from '../components/SpecialComponents/Homepage/LandingOurTeam';
import FAQ from '../components/SpecialComponents/Homepage/FAQ';
import questions from './FAQs';
import workshops from './Workshops';

const FirstColor = '#c89c2f';
const FirstColorBackText = 'black';
const SecondColor = '#e8332a';
const SecondColorBackText = 'white';

const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    height: '100vh',
    color: 'black',
    position: 'relative',
  },
  landingBackground: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: `#ffc301 no-repeat 50% fixed`,
    filter: 'blur(4px)',
    webkitFilter: 'blur(4px)',
    opacity: 0.9,
    backgroundSize: 'cover',
    zIndex: -3,
  },
  firstPageContent: {
    height: '100vh',
  },
  title: {
    fontSize: 110,
    lineHeight: '80px',
    fontWeight: 900,
    color: '#e8332a',
    textShadow: '-2px 2px #bd0d01',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    fontFamily: 'VIP Cartoon !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '50px',
      marginBottom: theme.spacing(1),
    },
  },
  telegramLink: {
    display: 'inline-block',
    marginRight: 10,
    color: 'inherit',
  },
  h_iframe_aparat_embed_frame: {
    position: 'relative',
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      boxShadow: '0 2px 4px rgb(0 0 0 / 15%), 0 1px 3px rgb(0 0 0 / 25%)',
      borderRadius: 8,
    },
    '& span': {
      display: 'block',
      paddingTop: '57%',
    },
  },
  Section: {
    padding: theme.spacing(10, 2),
    zIndex: 5,
    position: 'relative',
  },
  eventDescriptionSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },
  RastaDescriptionSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  kaftar: {
    maxHeight: '30vh',
    maxWidth: '100%',
  },
  moreButton: {
    margin: theme.spacing(2, 'auto', 0),
    textAlign: 'center',
    display: 'table',
  },
  workshopsSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  rastalkSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  sectionTitle: {
    margin: theme.spacing(2, 0, 4, 0),
  },
  funlandSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  FAQSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  cubeMelt: {
    maxWidth: '70%',
  },
  timeLineSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  teamSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  Buttons: {
    margin: theme.spacing(4, 0),
    direction: 'ltr',
  },
  titleButton: {
    backgroundColor: '#e8332a',
    color: 'white',
    '&:hover': {
      backgroundColor: '#d01f16',
    },
  },
  mummy: {
    position: 'fixed',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  schedule: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  scheduleGuide: {
    fontSize: 14,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  openingNotice: {
    margin: theme.spacing(0, 4, 0, 2),
  },
}));
function SummerSchool() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.titleSection}>
        <div id="back-to-top-anchor"></div>
        <div className={classes.landingBackground} />
        <img
          src={process.env.PUBLIC_URL + '/wall.png'}
          alt=""
          className={classes.mummy}
        />
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          direction="column"
          className={classes.firstPageContent}>
          <Grid item container alignItems="center" direction="column">
            <Grid item>
              <Typography component="h1" variant="h1" className={classes.title}>
                {'اینترکارسولار سه'}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">
                {'به زودی...'}
              </Typography>
            </Grid>
            {/* <Grid item>
              <img
                src={process.env.PUBLIC_URL + '/scroll.gif'}
                alt=""
                style={{ width: 20, margin: 35 }}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </section>


    </>
  );
}

export default connect()(SummerSchool);
