import {
  makeStyles,
} from '@material-ui/core';
import { React } from 'react';
import { connect } from 'react-redux';

import Appbar from '../../components/Appbar/ResponsiveAppBar'
import Comments from './Comments';
import Footer from './Footer';
import Galley from './Gallery';
import Header from './Header';
import Section from './Section';
import FAQ from './FAQ';



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
      <FAQ />
      <Galley />
      <Comments />
      <Footer />
    </>
  );
}

export default connect()(Index);
