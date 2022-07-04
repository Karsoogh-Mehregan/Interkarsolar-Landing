import {
  Dialog,
  Grid,
  Hidden,
  Typography,
  makeStyles,
} from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((/*theme*/) => ({
  image: (props) => ({
    height: '300px',
    background: `url(${props.picture})`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
  }),
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  }
}));

function Index({
  open,
  handleClose,
  name,
  description,
  picture,
}) {
  const classes = useStyles({ picture });
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid container justify='center' alignItems='center'>
        <Grid xs={12} sm={6} container item direction='column' justify='center'>
          <Grid item>
            <Typography gutterBottom variant="h4" align="center">
              {name}
            </Typography>
          </Grid >
          <Grid item>
            <Typography variant="h6" className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid sm={6} item className={classes.image} />
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default Index;