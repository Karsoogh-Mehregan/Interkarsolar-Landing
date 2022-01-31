import {
  makeStyles,
} from '@material-ui/core';
import { React } from 'react';

import Appbar from '../../components/Appbar/ResponsiveAppBar'
import Comments from './Comments';
import FAQ from './FAQ';
import Footer from './Footer';
import Galley from './Gallery';
import Header from './Header';
import Section from './Section';
import Staff from './Staff';



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
      <Staff />
      <Footer />
    </>
  );
}

export default Index;
