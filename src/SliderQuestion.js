import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },

];

function valuetext(value) {
  return `${value}`;
  
}


function SliderQuestion(props) {
  const classes = useStyles();


  const handleChange = (event, value) => {
    props.sliderOnValueChange(props.question.questionId, value.toString());
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        {props.question.title}
      </Typography>
      <Slider
        onChangeCommitted={handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        defaultValue={1}
        min={1}
        max={5}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
export default SliderQuestion;