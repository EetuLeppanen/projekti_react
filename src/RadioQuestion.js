import React, { useState, useEffect, } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FetchQuestions from './FetchQuestions';

function RadioQuestion(props) {

return( 


      <div>
        <FormLabel component="legend">{props.question.title}</FormLabel>
        <RadioGroup aria-label="kysely" onChange={props.handleValueChange}>
        {props.question.options.map((option, index) => 
          <FormControlLabel
              key={index}
              value={option.value} 
              control={<Radio />}
              label={option.value}      
            />
        
        )}
        
        </RadioGroup>
      </div>

)

}

export default RadioQuestion;
