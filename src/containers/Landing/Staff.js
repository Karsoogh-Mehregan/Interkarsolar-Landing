import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';
import PersonCard from '../../components/Cards/PersonCard';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: 'linear-gradient(to top right, #8204D5, #59A6FF)',
  },

  whiteDescription: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'justify',
    textJustify: 'inter-word',
  },

  title: {
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

function Index({
  staff = [],
}) {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'دست‌اندر‌کارانِ اینترکارسولار'}
        </Typography>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          {staff.map((staff) => (
            <Grid item key={staff.id}>
              <PersonCard {...staff} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </section>
  );
}

export default Index;
