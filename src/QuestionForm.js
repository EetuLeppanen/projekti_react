import React, {useState, useEffect} from 'react';
import {Grid, RadioGroup, TextField} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function QuestionForm(props) {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

 
    return (




<div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Lisää kysymys
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Lisää kysymys</DialogTitle>
        <DialogContent>
          <FormControl>
                        <FormLabel>
                            Kysymystyyppi
                        </FormLabel>
                        <RadioGroup
                        name='questiontype'
                        value={props.question.questiontype}
                        onChange={props.handleInputChange}>
                            <FormControlLabel value="RADIO" control={<Radio />} label="Radio" />
                            <FormControlLabel value="CHECKBOX" control={<Radio />} label="Monivalintainen checkbox" />
                            <FormControlLabel value="SCALE" control={<Radio />} label="Skaala" />
                            <FormControlLabel value="OPENTEXT" control={<Radio />} label="Avoin teksti" />

                        </RadioGroup>

                    </FormControl>
                    <TextField
                    variant="outlined"
                    label="Kysymys"
                    name="title"
                    value={props.question.title}
                    onChange = {props.handleInputChange}
                    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {handleClose(); props.addQuestion();}} color="primary">
            Lisää
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}