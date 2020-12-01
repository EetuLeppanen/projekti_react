import React, { useState, useEffect, } from 'react';
import RadioQuestion from './RadioQuestion';
import OpenQuestion from './OpenQuestion';
import Button from '@material-ui/core/Button';
import SliderQuestion from './SliderQuestion';
import CheckboxQuestion from './CheckboxQuestion';

export default function FetchQuestions(props){

  const [survey, setSurvey] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');
  const [value, setValue] = useState('');
  

  function handleChange(newValue) {
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

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(value);
    
};

useEffect( () => { fetchUrl(); }, [])

    return (
  <form  onSubmit={handleSubmit}>
    <div>
      <br></br>
      <RadioQuestion survey= {survey} value={value} onChange={handleChange}/> 
      <br></br>
        <SliderQuestion squestion = {survey[0]}/>
        <br></br>
        <CheckboxQuestion cquestion = {survey[0]}/>
    </div>
        <Button type="submit" variant="outlined" color="primary"> submit</Button>
  </form>
  )}