import { Dialog, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 1),
  },
  title: {
    margin: theme.spacing(2),
    fontWeight: '700',
  },
  text: {
    overFlowY: 'scroll',
    margin: theme.spacing(2),
  },
  description: {
    direction: 'rtl',
    lineHeight: '1.75',
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
      borderRadius: 8,
    },
    '& span': {
      display: 'block',
      paddingTop: '56%',
    },
    margin: theme.spacing(4, 0),
  },
}));

function VideoDialogue({ open, handleClose, name, teaserLink }) {
  const classes = useStyles();
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      style={{ overflow: 'hidden' }}>
      <section className={classes.container}>
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className={classes.title}>
          {'«' + name + '»'}
        </Typography>
        <div className={classes.h_iframe_aparat_embed_frame}>
          <span>
            <iframe
              title={name}
              src={teaserLink}
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"></iframe>
          </span>
        </div>
      </section>
    </Dialog>
  );
}

export default VideoDialogue;
