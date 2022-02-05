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
    background: '#aa3394',
  },

  title: {
    color: '#FFFFFF',
    textShadow: '-1px 1px #412C7D',
    margin: theme.spacing(0, 0, 7, 0),
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
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'نظر اینترکارسولاری‌های گذشته'}
        </Typography>
        <div dir='ltr'>
          <Carousel
            keyBoardControl={true}
            draggable={false}
            responsive={responsive}
            renderDotsOutside={true}>
            <div style={{ padding: 10 }}>
              <Comment
                name={'کورش محمدی'}
                description={'از شهید اژه‌ای۱ اصفهان'}
                comment={'من بهترین خاطرات خودم از ریاضی و کارگروهی و تعامل با دوستان را در کارسوق مهرگان تجربه کردم'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'فاطمه کشت‌دار'}
                description={'از فرزانگان۴ کرج '}
                comment={'به نظر من کارسوق، قسمت قشنگ دنیای ریاضی همراه با دوستای فضایی است'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'مهدی سعیدی'}
                description={'از علامه حلی ناحیه۲ اراک'}
                comment={'اینترکارسولار یک دوره هیجانی و کاملا متفاوت بود. علاقه من به‌خاطر مسائل چالشی که داره است'}
              />
            </div>
            <div style={{ padding: 10 }}>
              <Comment
                name={'سوگند عموپور'}
                description={'از فرزانگان رشت'}
                comment={'بهترین رویدادی که تا امروز شرکت کرده ‌بودم. یک جمع خودمونی و عالی با کلی مطالب جدید'}
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default Index;
