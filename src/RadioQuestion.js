import React, {} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(10),
  },
}));

export default function RadioQuestion(props) {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();
 
  
return( <Grid container className={classes.root} spacing={10}>
   <Grid item xs={12}
    direction="column"
    justify="center"
    alignItems="flex-start"
    padding="10px"
    spacing={spacing}
    >
    
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
      </Grid>
 </Grid>
)}
