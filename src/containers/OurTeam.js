import '../Theme/Styles/OurTeam.css';

import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';

import Apis from '../axios';
import ResponsiveAppBar from '../components/Appbar/ResponsiveAppBar';
import PersonCard from '../components/Cards/PersonCard';

const useStyles = makeStyles(() => ({
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


function Index({ members = [], teams = [], getLandingData }) {
  const classes = useStyles();

  useEffect(() => {
    const response = Apis.GET('https://utility.rastaiha.ir/people/', {});
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth='lg' className={classes.section}>
        <div className="our-team-page">
          <div className="tab-wrap">
            {teams.map((team, index) => (
              <>
                <input
                  type="radio"
                  id={'tab' + index}
                  name="tabGroup1"
                  className="tab"
                  defaultChecked={index === 0 ? 'checked' : ""}
                />
                <label htmlFor={'tab' + index}>{team}</label>
              </>
            ))}
            {teams.map((team) => (
              <div className="tab__content" key={team}>
                <Grid container spacing={2} justify="center">
                  {members
                    .filter((member) => member.team.includes(team))
                    .map((member, index) => (
                      <Grid container item key={index} xs={10} sm={4} md={3}>
                        <PersonCard {...member} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}


export default Index;
