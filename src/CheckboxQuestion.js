import React, {} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {

  const classes = useStyles();

  const [state, setState] = React.useState([]);


  const upDateList = (e) => {
    if(e.target.checked === true) {
      var list = state.filter(item => item.value !== e.target.value);
    var ans = {questionId: props.question.questionId, value: e.target.value};
    list.push(ans);
    setState(list);
    props.checkboxOnValueChange(props.question.questionId, list);
    } else {
      var list = state.filter(item => item.value !== e.target.value);
    setState(list);
    props.checkboxOnValueChange(props.question.questionId, list);
    }

  }
 

  return (
    <div className={classes.root}>
      <FormControl
        component="fieldset"
        className={classes.formControl}
      >
        <FormGroup>
          <FormLabel component="legend">{props.question.title}</FormLabel>
          {props.question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              questionId={props.question.questionId}
              control={<Checkbox />}
              onChange={upDateList}
              label={option.value}
              name={option.value}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
