import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    eetu: true,
    kimi: false,
    vesku: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };

  const { eetu, kimi, vesku } = state;
  

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">isoin str lvl?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={eetu} onChange={handleChange} name="eetu" />}
            label="eetu leppänen"
          />
          <FormControlLabel
            control={<Checkbox checked={kimi} onChange={handleChange} name="kimi" />}
            label="kimi korpela"
          />
          <FormControlLabel
            control={<Checkbox checked={vesku} onChange={handleChange} name="vesku" />}
            label="vesku loiri"
          />
        </FormGroup>
        <FormHelperText>vinkki: alkaa e</FormHelperText>
      </FormControl>
     
      
    </div>
  );
}