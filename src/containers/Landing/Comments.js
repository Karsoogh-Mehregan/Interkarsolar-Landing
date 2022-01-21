import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';
import Carousel from "react-multi-carousel";

import Comment from '../../components/Cards/Comment';

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 960 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 960, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  }
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#0076C5',
  },

  manBehindLaptop: {
    height: '100%',
    maxHeight: 400,
    width: '100%',
    maxWidth: 400,
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography variant="h1" gutterBottom>
          {'نظر اینترکارسولاری‌های گذشته'}
        </Typography>
        <div dir='ltr'>
          <Carousel
            draggable={false}
            responsive={responsive}
            renderDotsOutside={true}>
            <div style={{ padding: 10 }}>
              <Comment
                name={'مهرشاد جهانگیر'}
                description={'از دبیرستان شهید خاندوزی شهرکرد'}
                comment={'کارسوق خیلی خوب بود! جانمی جان :)'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'آبتین گوهرزاده'}
                description={'از دبیرستان عدالت تبریز '}
                comment={'کارسوق خیلی خوب بود! جانمی جان :)'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'کورش برزگر'}
                description={'از مدرسه‌ی موش‌های قصه‌ها'}
                comment={'کارسوق خیلی خوب بود! جانمی جان :)'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'ملیکا شعرباف'}
                description={'از دبیرستان فرزانگان امین ۳'}
                comment={'کارسوق خیلی خوب بود! جانمی جان :)'}
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default Index;
