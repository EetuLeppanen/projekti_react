import React, { useState, useEffect } from "react";
import RadioQuestion from "./RadioQuestion.js";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Survey from './Survey';
import { useHistory } from 'react-router-dom';

export default function PickSurvey() {
  const [surveyList, setSurveyList] = useState([]);

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://ohjelmistoprojekti1backend.herokuapp.com/surveys/';

  useEffect(() => {
    fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((data) => setSurveyList(data))
      .catch((error) => console.error(error));
  }, []);


  let history = useHistory();

  const redirect = (event) => {
    let id = event.target.value;
    history.push('/surveys/' + id)
  }


  if (surveyList) {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Kyselyn nimi</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {surveyList.map((row) => (
                <TableRow key={row.surveyId}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell>
                  <Button href={"/surveys/" + row.surveyId}>Vastaa</Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return <div>Loading surveys...</div>;
  }
}
