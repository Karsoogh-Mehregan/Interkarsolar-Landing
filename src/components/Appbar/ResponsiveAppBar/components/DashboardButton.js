import { Button, Icon, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  iconImage: {
    maxHeight: '20px',
    width: '100%',
  },
}));

export default function DashboardButton({ name, iconImage, to, ...props }) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      {...props}
      size='large'
      // component={Link}
      href={to}
      startIcon={
        iconImage ? (
          <Icon>
            <img
              src={`${process.env.PUBLIC_URL}/ZeroJourneyer/IconImages/${iconImage}`}
              alt="iconImage"
              className={classes.iconImage}
            />
          </Icon>
        ) : (
          ''
        )
      }>
      {name}
    </Button>
  );
}
