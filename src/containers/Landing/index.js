import {
  makeStyles,
} from '@material-ui/core';
import { React } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Section from './Section';
import Galley from './Gallery';
import Appbar from '../../components/Appbar/ResponsiveAppBar'

const useStyles = makeStyles((theme) => ({
}));

function Index() {
  const classes = useStyles();
  return (
    <>
      <Appbar showBackOnScroll />
      <div id="back-to-top-anchor"></div>
      <Header />
      <Section />
      <Galley />
    </>
  );
}

export default connect()(Index);
