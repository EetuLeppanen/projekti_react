import React, {useState, useEffect} from 'react';
import {Grid, TextField, CircularProgress, Button, TableHead, TableRow, TableBody, TableCell, Table} from '@material-ui/core';
import QuestionForm from './QuestionForm';


const initialSurveyValues = {
    title: ''
}

const initialQuestionValues = {
    survey: {
        surveyId: ''
    },
    questiontype: '',
    title: ''
}


export default function SurveyForm() {

    const [survey, setSurvey] = useState(initialSurveyValues);
    const [questionId, setQuestionId] = useState('');
    var responseSurveyId = '';
    

    const [question, setQuestion] = useState(initialQuestionValues);
    const [questions, setQuestions] = useState([]);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const surveysUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys';
    const questionUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/questions';
    const optionsUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/questions' + {questionId} + '/options';

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleInputChange = (event) => {
        setSurvey({...survey, [event.target.name]: event.target.value})
    }

    const handleInputChangeQuestion = (event) => {
        setQuestion({...question, [event.target.name]: event.target.value})
    }

    const addQuestion = () => {
        setQuestions([...questions, question]);
        setQuestion(initialQuestionValues);
    }

    const handleSubmit = () => {
        sendSurveyToBackend();
    }

    const sendSurveyToBackend = () => {
        fetch((proxyUrl + surveysUrl),{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(survey)

        })
        .then(response => response.json())
        .then(survey => {
            console.log(survey)
            responseSurveyId = survey.surveyId;
        })
        .then(() => sendQuestionsToBackend())
        .catch(error => console.error(error))

    }

    const sendQuestionsToBackend = () => {
        console.log(responseSurveyId);
            questions.forEach(q => {
                q.survey.surveyId = responseSurveyId;
                send(q);
            });

    }
    

    const send = (event) => {
        fetch((proxyUrl + questionUrl), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(response => response.json())
            .then(questionresp => {
                console.log(questionresp);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
        <form>
            <Grid container>
                <Grid item>
                    <TextField
                    variant="outlined"
                    label="Kyselyn otsikko"
                    name="title"
                    value={survey.title}
                    onChange = {handleInputChange}
                    />
                </Grid>

            </Grid>
        </form><br/><br/>
        <QuestionForm handleInputChange = {handleInputChangeQuestion} question={question} addQuestion={addQuestion}/>
        <Button
            variant="contained"
            onClick={() => handleSubmit()}
            disabled={loading}>
                Tallenna
            </Button>
            {loading && <CircularProgress size={24} />}
            {success && <p>Tallennettu!</p>}
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Questiontype</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {questions.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.questiontype}</TableCell>
                    </TableRow>
                ))}
                

            </TableBody>
        </Table>
        </div>

    )
}