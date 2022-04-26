import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { React } from 'react';


const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#8204D5',
  },

  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },

  title: {
    color: '#FFFFFF',
    textShadow: '-1px 1px #412C7D',
    margin: theme.spacing(0, 0, 7, 0),
  },

  description: {
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
}));


function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'قراره چه کارهایی انجام بدیم؟'}
        </Typography>

        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper} elevation={3}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={4}>
                  <img
                    src={process.env.PUBLIC_URL + '/33.jpg'}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'مرحله اول'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    ثبت نام مرحله‌ی اول آزمون از تاریخ ۱۶ بهمن‌ماه شروع می‌شه و تا ۳ام اسفند ادامه داره. چند روز بعد (۴ تا ۶ اسفند ماه) خود آزمون برگزار می‌شه.
                    مرحله‌ی اول شامل یه تعدادی سواله که دانش‌آموزان باید در بازه زمانی ۳ روزه به اون‌ها پاسخ بدن. سوالات این بخش به هیچ گونه پیش نیاز قبلی‌ای نیاز ندارند و پاسخگویی به اون‌ها کاملا به خلاقیت و منطق شرکت‌کنندگان وابسته است.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid
                container
                spacing={2}
                direction="row-reverse"
                alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + '/44.jpg'} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'مرحله دوم'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    تعدادی از شرکت‌کنندگان که از خان مرحله‌ی اول بگذرند و امتیاز بالاتری کسب کنند به مرحله‌ی دوم راه پیدا می‌کنند. مرحله‌ی دوم هم با اندکی تغییرات، مشابه مرحله‌ی اول در تاریخ ۱۶اردیبهشت‌ماه برگزار می‌شه!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + '/11.jpg'} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'دوره تابستانه'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    در نهایت، افرادی که بتونند از مرحله‌ی دوم هم با موفقیت عبور کنند می‌تونند در بخش سوم شرکت کنند. در بخش سوم ما برنامه‌های ویژه‌ای برای بچه‌ها تدارک دیدیم! کارگاه‌های علمی که اون‌هارو به سفری در دنیای ریاضیات مهمون می‌کنن و چیزهایی یادشون می‌دن که تا به حال نمی‌دونستند، ارائه‌های علمی توسط بزرگ‌ترهای  کارسوقی، دورهمی‌هایی صمیمی با سال بالایی‌ها تا تجربیات و چالش‌هاشون رو با اون‌ها به اشتراک بگذارند و صد البته در انتها، مسابقه (و اهدای جوایز) تا دوره رو به اتمام برسونه!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Container>


    </section>
  );
}

export default Index;