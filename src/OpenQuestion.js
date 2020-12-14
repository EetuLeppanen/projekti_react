import React, {} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";


function OpenQuestion(props) {
  
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.question.title}</FormLabel>
      <TextField
        onChange={props.onValueChange}
        id={props.question.questionId}/>
    </FormControl>
  );
}

export default OpenQuestion;
