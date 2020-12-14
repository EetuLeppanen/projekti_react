import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FetchQuestions from "./FetchQuestions";

function OpenQuestion(props) {
  
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.question.title}</FormLabel>
      <TextField
        onChange={props.onValueChange}
        id={props.question.questionid}/>
    </FormControl>
  );
}

export default OpenQuestion;
