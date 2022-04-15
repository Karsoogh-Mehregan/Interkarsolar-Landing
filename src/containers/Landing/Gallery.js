import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/1.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/1.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/2.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/2.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/3.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/3.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/4.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/4.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/5.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/5.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/6.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/6.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/7.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/7.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/8.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/8.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/9.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/9.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/10.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/10.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/11.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/11.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/12.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/12.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/13.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/13.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/14.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/14.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/15.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/15.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/16.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/16.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/17.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/17.jpg',
  },
  {
    original: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/18.jpg',
    thumbnail: 'https://karsoogh-mehregan.s3.ir-thr-at1.arvanstorage.com/photos/1.jpg',
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
