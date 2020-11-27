import React, { useState, useEffect, } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default function RadioQuestion(props) {
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');
  const [error, setError] = React.useState(false);
  const [kylla, setKylla] = useState('Haetaan');
  const [ei, setEi] = useState('Haetaan');
  const [vast, setVast] = useState([]);

    const handleRadioChange = (event) => {
        setValue({...value, vast: event.target.value });
        console.log(value);
        
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
      };


return( <Grid container spacing={2}
    direction="column"
    justify="center"
    alignItems="flex-start">
    
      {
      props.questions.map(question => { 
  return(
    
    <form key={ question.options.questionId } onSubmit={handleSubmit}>
        <FormControl component="fieldset">
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup aria-label="kysely" name="kys1" value={vast} onChange={handleRadioChange}>
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
      <Button type="submit" variant="outlined" color="primary"> submit</Button>
      </form>
      
      
          );  
        })
      }
    
       
 </Grid>

)}
