import React, {useState, useEffect} from 'react';
import RadioQuestion from './RadioQuestion.js';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
      padding: 100,
    },
    control: {
      padding: theme.spacing(10),
    },
  }));

function Survey () {
  let { valinta } = useParams();
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
    const [survey, setSurvey] = useState('');
    const [value, setValue] = useState('');
    const [answers, setAnswers] = useState([]);
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys/' + valinta;
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
            <Grid container className={classes.root} spacing={10}>
            <Grid item xs={12}
             direction="column"
             justify="center"
             alignItems="flex-start"
             padding="10px"
             spacing={spacing}
             >
                 
            <FormControl>
               
                {survey.questions.map((question, index) =>
                <Paper elevation={30}>
                <RadioQuestion key={index} question={question} value={value} handleValueChange={handleValueChange}/>
                </Paper>
                )}
                
                <Button onClick={() => handleSubmit()}>
                    submit
                </Button>
                
            </FormControl>
            
            </Grid>
 </Grid>
)
      } else
        return(
         <div>Loading survey...</div>
         )
}

export default Survey;