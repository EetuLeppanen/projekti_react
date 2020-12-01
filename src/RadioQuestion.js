import React, {} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';


export default function RadioQuestion(props) {

 
  function handleChange(event) {
    props.onChange(event.target.value);
    
}

return( <Grid container spacing={2}
    direction="column"
    justify="center"
    alignItems="flex-start">
    
      {
      props.survey.map(question => { 
  return(
    
        <FormControl component="fieldset">
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup aria-label="kysely" name="kys1" value={props.value} onChange={handleChange}>
        <FormControlLabel
        key={ question.options[0].optionId }
              value={question.options[0].value} 
              control={<Radio />}
              label={question.options[0].value}      
            />
        <FormControlLabel
         key={ question.options[1].optionId }
              value={question.options[1].value}
              control={<Radio />}
              label={question.options[1].value}
      
            />
            <FormControlLabel
             key={ question.options[2].optionId }
              value={question.options[2].value}
              control={<Radio />}
              label={question.options[2].value}
              
            />
        </RadioGroup>
      </FormControl>      
      
          );  
        })
      }          
 </Grid>
)}
