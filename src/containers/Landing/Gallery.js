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
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-10.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-10.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-15.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-15.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-42-00.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-42-00.jpg',

  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-18.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-18.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-21.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-21.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-24.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-24.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-29.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-29.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-32.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-32.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-35.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-35.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-37.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-37.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-48.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-48.jpg',
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-51.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-38-51.jpg'
  },
  {
    original: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-41-56.jpg',
    thumbnail: 'https://media.githubusercontent.com/media/Karsoogh-Mehregan/upload_center/main/Landing/Gallery/photo_2022-02-01_20-41-56.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#EDEDED',
  }
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography variant="h1" gutterBottom>
          {'نگارخانه'}
        </Typography>
        <ImageGallery isRTL={true} showPlayButton={false} showBullets={true} showFullscreenButton={false} items={images} />
      </Container>

    </section>
  );
}

export default Index;
