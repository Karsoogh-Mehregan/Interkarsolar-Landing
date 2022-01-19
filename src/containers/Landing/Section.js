import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';
import { connect } from 'react-redux';

const FirstColor = '#c89c2f';
const FirstColorBackText = 'black';
const SecondColor = '#e8332a';
const SecondColorBackText = 'white';

const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    height: '100vh',
    color: 'black',
    position: 'relative',
  },
  landingBackground: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: `#ffc301 no-repeat 50% fixed`,
    filter: 'blur(4px)',
    webkitFilter: 'blur(4px)',
    opacity: 0.9,
    backgroundSize: 'cover',
    zIndex: -3,
  },
  firstPageContent: {
    height: '100vh',
  },
  title: {
    fontSize: 110,
    lineHeight: '80px',
    fontWeight: 900,
    color: '#e8332a',
    textShadow: '-2px 2px #bd0d01',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    fontFamily: 'VIP Cartoon !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '50px',
      marginBottom: theme.spacing(1),
    },
  },
  telegramLink: {
    display: 'inline-block',
    marginRight: 10,
    color: 'inherit',
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
      boxShadow: '0 2px 4px rgb(0 0 0 / 15%), 0 1px 3px rgb(0 0 0 / 25%)',
      borderRadius: 8,
    },
    '& span': {
      display: 'block',
      paddingTop: '57%',
    },
  },
  Section: {
    padding: theme.spacing(10, 2),
    zIndex: 5,
    position: 'relative',
  },
  eventDescriptionSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },
  RastaDescriptionSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  kaftar: {
    maxHeight: '30vh',
    maxWidth: '100%',
  },
  moreButton: {
    margin: theme.spacing(2, 'auto', 0),
    textAlign: 'center',
    display: 'table',
  },
  workshopsSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
}));

function SummerSchool() {
  const classes = useStyles();
  return (
    <>
      <section
        className={`${classes.eventDescriptionSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          چه خبره؟
        </Typography>
        <Grid container justify="space-evenly" alignItems="center" spacing={4}>
          <Grid
            item
            container
            justify="left"
            order={{ sm: 1, md: 2 }}
            spacing={2}
            xs={12}
            md={6}>
            <Grid item>
              <Typography variant="subtitle1">
                توی این رویداد قراره که ۵تا کارگاه علمی مختلف رو بگذرونیم و روز
                آخر هم یه بازی خفن داریم!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                امسال کارگاه‌های علمی‌مون، گشت و گذاری هست در موضوعات علمی مختلف
                و حتی شاخه‌های بین رشته‌ای؛ از علوم کامپیوتر و فیزیک گرفته تا
                زیست‌شناسی که به زودی اطلاعات بیشتری درباره‌شون منتشر می‌کنیم :)
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                نکته‌ی مهم کارگاه‌ها اینه که در بستری که رستا اون رو توسعه داده،
                اجرا می‌شه. این بستر به نوعی طراحی شده که روحیه‌ی تعاملی و
                مسئله‌محوری کارگاه‌ها رو در شرایط مجازی هم حفظ کنه.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                امسال توی کارگاه‌ها دو بخش مختلف داریم. توی بخش اول شما توی
                گروه‌های سه نفره و به همراه همیارها محتواهای علمی کارگاه رو
                می‌گذرونید و در قسمت دوم قراره از چیزهایی که یادگرفتید بیشتر
                استفاده کنید؛ ممکنه نیاز باشه در نقش دانشمندان یه شرکت نظرات‌تون
                رو بیان کنید یا با همیارهاتون بازی‌های مرتبط با محتوای علمی
                کارگاه رو بگذرونید.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                به جز کارگاه‌ها که توی چهار روز برگزار می‌شن و بازی انتهایی که
                در روز پنجم هست، توی رویداد دورهمی و شهربازی هم داریم که به زودی
                بیشتر درباره‌شون توضیح می‌دیم.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {
                  'برای اطلاع از اخباری که در آینده‌ای نزدیک منتشر می‌شه می‌تونید به کانال تلگراممون مراجعه کنید:'
                }
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/rastaihaOnline"
                  className={classes.telegramLink}
                  style={{ direction: 'ltr' }}>
                  {'@RastaihaOnline'}
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {
                  'و همچنین می‌تونید ویژه‌نامه نیم نیم‌خط رو که برای مخاطبان مدرسه تابستانه رستا آماده شده از این لینک دانلود کنید:'
                }
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={process.env.PUBLIC_URL + 'ویژه‌نامه_نیم_نیم‌خط.pdf'}
                  className={classes.telegramLink}
                  style={{ direction: 'ltr' }}>
                  {'دانلود'}
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={5}
            order={{ sm: 2, md: 1 }}
            className={classes.video}>
            <div className={classes.h_iframe_aparat_embed_frame}>
              <span></span>
              <iframe
                title="مدرسه تابستانه رستا"
                src="https://www.aparat.com/video/video/embed/videohash/aH08d/vt/frame"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default connect()(SummerSchool);
