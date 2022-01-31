import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";

import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import Root from './root';
import RTLMuiTheme from './Theme/MuiThemes/RTLMuiTheme';
import jss from './utils/jssRTL';

const Index = () => {
  return (
    <ThemeProvider theme={RTLMuiTheme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Root />
      </StylesProvider>
    </ThemeProvider>
  );
};

export default Index;
