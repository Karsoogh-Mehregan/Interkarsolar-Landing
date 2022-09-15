
import { React } from 'react';

import Appbar from '../../components/Appbar/ResponsiveAppBar'
import Comments from './Comments';
import FAQ from './FAQ';
import Footer from './Footer';
import Galley from './Gallery';
import Header from './Header';
// import Staff from './Staff';
import Steps from './Steps';
import Timer from './Timer'
import WhatTheFuzz from './WhatTheFuzz';
// import Discord from './Discord';


function Index() {
  // const classes = useStyles();
  return (
    <>
      <Appbar showBackOnScroll />
      <div id="back-to-top-anchor"></div>
      <Header />
      {/* <Discord/> */}
      <WhatTheFuzz />
      <Steps />
      <FAQ />
      <Galley />
      <Comments />
      {/* <Staff /> */}
      <Timer />
      <Footer />
    </>
  );
}

export default Index;
