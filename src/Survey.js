import React, {useState, useEffect} from 'react';
import RadioQuestion from './RadioQuestion.js';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function Survey () {
    
    const [survey, setSurvey] = useState('');
    const [value, setValue] = useState('');
    const [answers, setAnswers] = useState([]);
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys/1';
    const answerUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/api/answers';
    const localUrl = 'http://localhost:8080/answers';


    useEffect(() => {
        fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => setSurvey(data))
        .catch(error => console.error(error))
    }, []);

    const handleValueChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
        addValueToAnswers(event.target.value);
        console.log(answers);
      };

      const addValueToAnswers = (event) => {
          setAnswers([...answers, event]);
      }


      const handleSubmit = () => {
          console.log({value});
          answers.map((asd) =>{
              sendAnswers(asd);

          })
      }


      const sendAnswers = (event) => {
          fetch((proxyUrl + answerUrl),{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(event)

          })
          .then(response => console.log(response))
          .catch(error => console.error(error))

      }



      if(survey) {
        return(
        
            <FormControl>
               
                {survey.questions.map((question, index) =>
                <RadioQuestion key={index} question={question} value={value} handleValueChange={handleValueChange}/>
                )}
                <Button onClick={() => handleSubmit()}>
                    submit
                </Button>
            </FormControl>
)
      } else
        return(
         <div>Loading survey...</div>
         )
}

export default Survey;