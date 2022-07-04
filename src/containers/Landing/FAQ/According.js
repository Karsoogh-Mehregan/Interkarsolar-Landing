import { Typography, makeStyles } from '@material-ui/core';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React from 'react';
import questions from './Questions';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: '#7400B8',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'block',
  },
}))(MuiAccordionDetails);

const FAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return questions.map((question, index) => (
    <Accordion
      key={index}
      square
      expanded={expanded === 'panel' + index}
      onChange={handleChange('panel' + index)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography variant="h4">{question.text}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.text}>{question.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

export default FAQ;
