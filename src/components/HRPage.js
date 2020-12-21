import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {Button, ButtonGroup} from 'react-bootstrap';
import QuestionForm from "./QuestionForm";

export const HRPage = props => {
    let history = useHistory()

    function handleClick() {
        history.push("/questionform");
    }

    return (
        <div className="hrpage">
            <ButtonGroup aria-label="Basic example" toggle={true}>
                <Button name='fillInterview' value="fillInterview" onClick={handleClick}> Fill an
                    Interview </Button>
            </ButtonGroup>
            <span>Hello HR</span>
            <Router>
                <div className="container">
                    <Switch>
                        <Route path='/questionform' component={QuestionForm}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default HRPage;