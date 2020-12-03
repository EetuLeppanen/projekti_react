import React, { useState, useEffect, } from 'react';
import RadioQuestion from './RadioQuestion';
import OpenQuestion from './OpenQuestion';
import Button from '@material-ui/core/Button';
import SliderQuestion from './SliderQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import FormControl from '@material-ui/core/FormControl';
export default function FetchQuestions(props){

  const [survey, setSurvey] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');
  const [error, setError] = React.useState(false);

  const [value, setValue] = useState('');


  function handleValueChange(newValue) {
    setValue(newValue);
    console.log(value);
  }

  const fetchUrl = async () => {
    try { 
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys/1/questions/'; 
      const response = await fetch(proxyUrl + targetUrl);
      const json = await response.json();
     setSurvey(json);
      console.log(value);
    
}   catch (error) {
      setTeksti('Haku ei onnistunut');
}}

    const handleSubmit = (value) => {

      fetch('https://cors-anywhere.herokuapp.com/https://ohjelmistoprojekti1backend.herokuapp.com/api/answers',
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(value)
        })
        .then(res => fetchUrl())
        .catch(err => console.error(err))
        console.log(value)
}
    


useEffect( () => { fetchUrl(); }, [])

    return (
      <FormControl>

      {survey.questions.map((question, index) =>
      <RadioQuestion key={index} question={question} value={value} handleValueChange={handleValueChange}/>
      )}
      <Button onClick={() => handleSubmit()}>
          submit
      </Button>
  </FormControl>
  )}