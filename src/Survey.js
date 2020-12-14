import React, {useState, useEffect} from 'react';
import RadioQuestion from './RadioQuestion.js';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import OpenQuestion from './OpenQuestion.js';
import CheckBoxQuestion from './CheckboxQuestion.js';
import SliderQuestion from './SliderQuestion.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '10px',
        paddingBottom: '15px',
        width: '25ch',
      }},
      h1: {
          color: '#1F19C7'
      }
    
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function Survey () {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      
    const classes = useStyles();

    let {id} = useParams();
    
    const [vastauslista, setVastauslista] = useState([]);
    
    const [survey, setSurvey] = useState('');

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys/' + id;
    const urlToSendAnswers = 'https://ohjelmistoprojekti1backend.herokuapp.com/anssurs';
    

    useEffect(() => {
        fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => setSurvey(data))
        .catch(error => console.error(error))
    }, []);


    const handleValueChange =  (index, answer) => {
        vastauslista[index] = answer;
        
      };

        
        

        const onValueChange = (event) => {
        var list = vastauslista.filter(item => item.questionId !== parseInt(event.target.id));
        if(event.target.value !== "") {
            var answer = {questionId: parseInt(event.target.id), value: event.target.value};
            list.push(answer);
        }
        setVastauslista(list);
    }

    

    const sliderOnValueChange = (questionId, value) => {
        var answer = {questionId: parseInt(questionId), value: value};
        var list = vastauslista.filter(item => item.questionId !== parseInt(questionId));
        list.push(answer);
        setVastauslista(list);
    }

    const checkboxOnValueChange = (questionId, answerlist) => {
        var list = vastauslista.filter(item => item.questionId !== parseInt(questionId));
        answerlist.forEach(element => {
            list.push(element);
        });
        setVastauslista(list);

    }
    
    
   
      const sendAnswersToBackend = (event) => {
          
          var answeredsurvey = {surveyId: survey.surveyId, answers: vastauslista}
          console.log(answeredsurvey);

          fetch((urlToSendAnswers),{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(answeredsurvey)

        })
        .then(response => response.json())
        .then(answer=> console.log(answer))
        .catch(error => console.error(error))
      }




      if(survey) {
        return(
            <div>
               
              <div> <h1 className={classes.h1}> {survey.title}</h1></div>
               <div><b>Kyselyn tunnus: {id}</b></div><br/>
            <form className={classes.root} onSubmit={sendAnswersToBackend}>
                {survey.questions.map((question, index) => {
                
                if(question.questiontype === "RADIO"){

                    return <RadioQuestion key={index} index={index} question={question} onValueChange={onValueChange} handleValueChange={handleValueChange}/>

                } else if(question.questiontype === "OPENTEXT") {
                    
                    return <OpenQuestion key={index} index={index}  question={question} onValueChange={onValueChange} handleValueChange={handleValueChange}/>

                } else if(question.questiontype === "CHECKBOX") {
                    
                    return <CheckBoxQuestion key={index}  index={index} question={question} checkboxOnValueChange={checkboxOnValueChange}/>

                } else if(question.questiontype === "SCALE") {
                    return <SliderQuestion key={index} index={index} question={question} sliderOnValueChange={sliderOnValueChange}/>
                } else {
                    return (<div>hello</div>)
                }
                    
                
                
                
                })}
               <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Lähetä
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Lähetetäänkö vastaus?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Vakuutan antamani tiedot oikeiksi.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Peruuta
          </Button>
          <Button onClick={() => { handleClose(); sendAnswersToBackend();}} type="submit" color="secondary" > 
           Hyväksy
          </Button>
        </DialogActions>
      </Dialog>
            </form>
            </div>

)
      } else
        return(
         <div>Loading survey...</div>
         )
}

export default Survey;