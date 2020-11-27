import React, { useState, useEffect, } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RadioQuestion from './RadioQuestion';
import OpenQuestion from './OpenQuestion';


export default function FetchQuestions(props){


  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');
  const [error, setError] = React.useState(false);
  const [kylla, setKylla] = useState('Haetaan');
  const [ei, setEi] = useState('Haetaan');
  const [vast, setVast] = useState([]);
  const [vasta, setVasta] = useState('1');
  
  
  const fetchUrl = async () => {




  try {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/questions'; //muuttuja lisätään
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    setQuestions(json);
    console.log(questions);
   
    setKylla(json.options[0].value)
    console.log();
} catch (error) {
    setTeksti('Haku ei onnistunut');
}}



useEffect( () => { fetchUrl(); }, [])


  return (
    <div>
    <RadioQuestion questions= {questions}/> 
    <OpenQuestion/>
    </div>
  )}