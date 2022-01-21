import {
  makeStyles,
} from '@material-ui/core';
import { React } from 'react';
import { connect } from 'react-redux';

import Appbar from '../../components/Appbar/ResponsiveAppBar'
import Comments from './Comments';
import Galley from './Gallery';
import Header from './Header';
import Section from './Section';


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
      <Comments />
    </>
  );
}

export default connect()(Index);
