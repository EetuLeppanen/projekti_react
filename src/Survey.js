import React, {useState, useEffect} from 'react';
import RadioQuestion from './RadioQuestion.js';

import OpenQuestion from './OpenQuestion.js';
import CheckBoxQuestion from './CheckboxQuestion.js';
import SliderQuestion from './SliderQuestion.js';
import Button from '@material-ui/core/Button';
import {
    useParams
  } from "react-router-dom";

function Survey () {

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

        
        const checkAnswers = () => {
            console.log(vastauslista);
        }

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
    
    
    const checkasd =(event) => {
        console.log(vastauslista);
        
      }

      const asdf = () => {
          console.log(survey);
      }

      const sendAnswersToBackend = (event) => {
          event.preventDefault();
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
                <Button onClick={checkAnswers}>tarkista</Button>
                <Button onClick={asdf}>näytä survey</Button>
                <Button onClick={checkasd}>näytä vastaukset</Button>
               <div>Otsikko: {survey.title}</div><br/>
               <div>Kyselyn ID: {id}</div><br/>
            <form onSubmit={sendAnswersToBackend}>
                {survey.questions.map((question, index) => {
                
                if(question.questiontype === "RADIO"){

                    return <RadioQuestion key={index} index={index} question={question} onValueChange={onValueChange} handleValueChange={handleValueChange}/>

                } else if(question.questiontype === "OPENTEXT") {
                    
                    return <OpenQuestion key={index} index={index} question={question} onValueChange={onValueChange} handleValueChange={handleValueChange}/>

                } else if(question.questiontype === "CHECKBOX") {
                    
                    return <CheckBoxQuestion key={index} index={index} question={question} checkboxOnValueChange={checkboxOnValueChange}/>

                } else if(question.questiontype === "SCALE") {
                    return <SliderQuestion key={index} index={index} question={question} sliderOnValueChange={sliderOnValueChange}/>
                } else {
                    return (<div>hello</div>)
                }
                    
                
                
                
                })}
                <Button type="submit">
                    submit
                </Button>
            </form>
            </div>

)
      } else
        return(
         <div>Loading survey...</div>
         )
}

export default Survey;