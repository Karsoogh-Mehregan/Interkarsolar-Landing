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
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559703/photo_2022-02-11_09-36-41_mgx9p3.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559703/photo_2022-02-11_09-36-41_mgx9p3.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559697/photo_2022-02-11_09-36-38_vpicoy.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559697/photo_2022-02-11_09-36-38_vpicoy.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559692/photo_2022-02-11_09-36-34_eniwla.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559692/photo_2022-02-11_09-36-34_eniwla.jpg',

  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559685/photo_2022-02-11_09-36-28_vhomuj.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559685/photo_2022-02-11_09-36-28_vhomuj.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559678/photo_2022-02-11_09-36-22_m9yntk.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559678/photo_2022-02-11_09-36-22_m9yntk.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559669/photo_2022-02-11_09-36-18_r6zzk7.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559669/photo_2022-02-11_09-36-18_r6zzk7.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559663/photo_2022-02-11_09-36-15_xemvzr.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559663/photo_2022-02-11_09-36-15_xemvzr.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559655/photo_2022-02-11_09-36-13_rifurd.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559655/photo_2022-02-11_09-36-13_rifurd.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559646/photo_2022-02-11_09-36-09_kcicse.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559646/photo_2022-02-11_09-36-09_kcicse.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559639/photo_2022-02-11_09-36-05_mtnlqh.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559639/photo_2022-02-11_09-36-05_mtnlqh.jpg',
  },
  {
    original: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559628/photo_2022-02-11_09-35-56_nr6div.jpg',
    thumbnail: 'https://res.cloudinary.com/dvuazyamw/image/upload/v1644559628/photo_2022-02-11_09-35-56_nr6div.jpg',
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
