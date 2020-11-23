import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green,} from '@material-ui/core/colors/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import KyselyFetchApp from './KyselyFetchApp';

import MenuMUI from './navigationMUI/MenuMUI';
import EtuSivu from './EtuSivu';




const theme = createMuiTheme({
    palette: {
        primary:{main: '#000001', contrastText: '#FFFFFF'},
        secondary: {main: '#f4d4f4', contrastText: '#FFFFFF'},
        text: {primary: '#000000', secondary: blue[900], contrastText: '#FFFFFF' },
        action: {active: blue[300], hover: '#1a233e', selected: green[300] },
        background: { default: '#000000',
        },
        },
    typography: 
        { fontFamily: 
            ['Muli'], 
            fontSize: 24
        },
        
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body : {
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    backgroundImage:
                    "url(https://oldschoolgrappling.com/wp-content/uploads/2018/08/Background-opera-speeddials-community-web-simple-backgrounds.jpg)"
                }
            }
        }
         },
    });
function ProjektiApp () {

    return ( 
        <BrowserRouter>
        <MuiThemeProvider theme={ theme }>
        <div>
            <CssBaseline/>
            <MenuMUI/>
            <Switch>
                <Route exact path='/' component={ EtuSivu} />
                <Route path='/kysymys' component= { KyselyFetchApp } />
            </Switch>

            
        </div>
        </MuiThemeProvider>
        </BrowserRouter>
        
    )
}
export default ProjektiApp;