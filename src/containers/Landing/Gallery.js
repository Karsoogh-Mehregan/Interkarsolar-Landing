import {
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';

import ImageGallery from 'react-image-gallery';
import { React } from 'react';

const images = [
  {
    original: '/photos/1.jpg',
    thumbnail: '/photos/1.jpg',
  },
  {
    original: '/photos/2.jpg',
    thumbnail: '/photos/2.jpg',
  },
  {
    original: '/photos/3.jpg',
    thumbnail: '/photos/3.jpg',
  },
  {
    original: '/photos/4.jpg',
    thumbnail: '/photos/4.jpg',
  },
  {
    original: '/photos/5.jpg',
    thumbnail: '/photos/5.jpg',
  },
  {
    original: '/photos/6.jpg',
    thumbnail: '/photos/6.jpg',
  },
  {
    original: '/photos/7.jpg',
    thumbnail: '/photos/7.jpg',
  },
  {
    original: '/photos/8.jpg',
    thumbnail: '/photos/8.jpg',
  },
  {
    original: '/photos/9.jpg',
    thumbnail: '/photos/9.jpg',
  },
  {
    original: '/photos/10.jpg',
    thumbnail: '/photos/10.jpg',
  },
  {
    original: '/photos/11.jpg',
    thumbnail: '/photos/11.jpg',
  },
  {
    original: '/photos/12.jpg',
    thumbnail: '/photos/12.jpg',
  },
  {
    original: '/photos/13.jpg',
    thumbnail: '/photos/13.jpg',
  },
  {
    original: '/photos/14.jpg',
    thumbnail: '/photos/14.jpg',
  },
  {
    original: '/photos/15.jpg',
    thumbnail: '/photos/15.jpg',
  },
  {
    original: '/photos/16.jpg',
    thumbnail: '/photos/16.jpg',
  },
  {
    original: '/photos/17.jpg',
    thumbnail: '/photos/17.jpg',
  },
  {
    original: '/photos/18.jpg',
    thumbnail: '/photos/1.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#FDFDFD',
  },

  title: {
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'نگارخانه'}
        </Typography>
        <ImageGallery isRTL={true} showPlayButton={false} showBullets={true} showFullscreenButton={false} items={images} />
      </Container>

    </section>
  );
}

export default Index;
