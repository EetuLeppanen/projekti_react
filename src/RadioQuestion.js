import React, {} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



export default function RadioQuestion(props) {

 
  
return( 
    
        <FormControl component="fieldset">
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
      </FormControl>      
    
)}
