import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

import PersonIntroduction from './PersonIntroduction';

const useStyles = makeStyles({
  root: {
    // height: '100%',
    width: '100%',
    boxShadow: '0 0 2rem -1.5rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.2rem) scale(1.02)',
      boxShadow: '0 0.5em 0.5rem -0.5rem rgba(0, 0, 0, 0.5)',
    },
    background: '#e9e2c6',
  },
  media: {
    height: '300px',
  },
  icon: {
    textAlign: 'center',
  },
});

const PersonCard = ({
  picture,
  name,
  position,
  description,
}) => {
  const classes = useStyles();
  const [isDialogueOpen, setDialogueOpen] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea disabled>
          <CardMedia
            className={classes.media}
            image={picture}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            {/* {person.team.map((team) => (
              <>
                <Typography variant="body2" color="textSecondary" component="p">
                  {team}
                </Typography>
              </>
            ))} */}
            {position &&
              <Typography variant="body2" color="textSecondary" component="p">
                {position}
              </Typography>
            }
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => setDialogueOpen(!isDialogueOpen)}>
            او کیست؟
          </Button>
        </CardActions>
        <PersonIntroduction
          name={name}
          description={description}
          picture={picture}
          open={isDialogueOpen}
          handleClose={() => {
            setDialogueOpen(!isDialogueOpen);
          }}
        />
      </Card>
    </>
  );
};

export default PersonCard;
