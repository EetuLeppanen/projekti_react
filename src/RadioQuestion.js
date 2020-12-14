import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FetchQuestions from "./FetchQuestions";

function RadioQuestion(props) {


  return (
    <RadioGroup aria-label="kysely" onChange={props.onValueChange}>
      <FormLabel component="legend">{props.question.title}</FormLabel>
      {props.question.options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio id={props.question.questionid} />}
          label={option.value}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioQuestion;
