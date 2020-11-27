import React, { useState, useEffect, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FetchQuestions from './FetchQuestions';
import { Link } from 'react-router-dom';


function QuestionSelect() {

const [valinta, setValinta] = useState('');
const surveys = [
  {
    value: 1,
    label: 'Ensimmäinen kysely',
  },
];

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const classes = useStyles();
  
    const handleChange = (event) => {
    setValinta(event.target.value );
    console.log(surveys);
    <FetchQuestions valinta = {valinta}/>
  };
  

  
return(
    <Grid container spacing={2}
    direction="column"
    justify="center"
    alignItems="flex-start">

<form className={classes.root} noValidate autoComplete="off" >
      <div>
        <TextField
          id="asd"
          select
          value={valinta}
          onChange={handleChange}
          helperText="Valitse kysely">
 {surveys.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}


        </TextField>
        <Grid item>
        <Button  component={ Link } to='/Kysymykset'>Valitse</Button>
        </Grid>
        
        
        </div>
</form>
</Grid>



)
}

  export default QuestionSelect;