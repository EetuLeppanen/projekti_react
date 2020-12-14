
import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";



function RadioQuestion(props) {



  return (
    <RadioGroup aria-label="kysely" onChange={props.onValueChange}>
      <FormLabel component="legend">{props.question.title}</FormLabel>
      {props.question.options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio id={props.question.questionId} />}
          label={option.value}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioQuestion;
