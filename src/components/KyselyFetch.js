import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import KyselyFetchApp from '../KyselyFetchApp';

function KyselyFetch() {
  const [value, setValue] = React.useState('Kyllä');
  const [questions, setQuestions] = useState([]);
  const [teksti, setTeksti] = useState('Haetaan');
  
  
  const fetchUrl = async () => {

  try {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/getquestions/'
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    setQuestions(json.questions);
    console.log(json.title);
   

} catch (error) {
    setTeksti('Haku ei onnistunut');
}

}

useEffect( () => { fetchUrl(); }, [])


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return ( 
      <div>
      { questions }
      
      
      
    <FormControl component="fieldset">
      <FormLabel component="legend">Onko Arskalla hieno auto?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      {questions.map(question => (
          <FormControlLabel
            value={question.title}
            control={<Radio />}
            label={question.title}
            key={question.questionid}
          />
          
        ))}
        <FormControlLabel value="Kyllä" control={<Radio />} label="Kyllä" />
        <FormControlLabel value="Ei" control={<Radio />} label="Ei" />
        <FormControlLabel value="EOS" control={<Radio />} label="En osaa sanoa" />
        
      
        

      </RadioGroup>
    </FormControl>
    </div>
  );
}

export default KyselyFetch;