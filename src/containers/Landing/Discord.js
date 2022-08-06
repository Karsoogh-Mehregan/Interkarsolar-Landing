import {
    Container,
    Grid,
    makeStyles,
    Typography,
  } from '@material-ui/core';
  import { React } from 'react';
  
  
  const useStyles = makeStyles((theme) => ({
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
  
    section: {
      padding: theme.spacing(20, 0, 20, 0),
      zIndex: 5,
      position: 'relative',
      backgroundImage: `url('discordBg3.jpg')`,
      backgroundOrigin: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      opacity: 0.96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      
    },
  
  
    title: {
      margin: theme.spacing(5, 0, 2, 0),
      textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerTitle: {
        margin: theme.spacing(-12, 0, 0, 0),
        textAlign: 'center',
    }
  }));
  
  function Index() {
    const classes = useStyles();
    return (
      <section className={classes.section}>
        {/* <div style={{ position: 'absolute', top: 0, right: 0, width: '100%' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#31256A" fillOpacity="1" d="M0,32L26.7,80C53.3,128,107,224,160,261.3C213.3,299,267,277,320,245.3C373.3,213,427,171,480,138.7C533.3,107,587,85,640,112C693.3,139,747,213,800,229.3C853.3,245,907,203,960,165.3C1013.3,128,1067,96,1120,80C1173.3,64,1227,64,1280,69.3C1333.3,75,1387,85,1413,90.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div> */}
        <Container maxWidth='lg'>
        <Typography className={classes.headerTitle} variant="h1" gutterBottom>
            {'آموزش شبکه اجتماعی دیسکورد'}
          </Typography>
        </Container>
        <Container className={classes.container}  maxWidth='lg'>
          <Typography className={classes.title} variant="h2" gutterBottom>
            {'«نسخهٔ کامپیوتر»'}
          </Typography>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12} md={7}>
              <div className={classes.h_iframe_aparat_embed_frame}>
                <span></span>
                <iframe
                  title="چگونه با دیسکورد کار کنیم؟ (کامپوتر)"
                  src="https://www.aparat.com/video/video/embed/videohash/U7x1g/vt/frame"
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"></iframe>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}  maxWidth='lg'>
          <Typography className={classes.title} variant="h2" gutterBottom>
            {'«نسخهٔ موبایل»'}
          </Typography>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12} md={7}>
              <div className={classes.h_iframe_aparat_embed_frame}>
                <span></span>
                <iframe
                  title="چگونه با دیسکورد کار کنیم؟ (موبایل)"
                  src="https://www.aparat.com/video/video/embed/videohash/iMEh7/vt/frame"
                  muted="false"
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"></iframe>
              </div>
            </Grid>
          </Grid>
        </Container>
  
        {/* <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,218.7C840,224,960,160,1080,138.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div> */}
      </section>
    );
  }
  
  export default Index;
  