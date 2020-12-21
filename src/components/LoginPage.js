import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import HRPage from "./HRPage";
import App from "../App";


export const LoginPage = props => {
    let history = useHistory()
    const responseGoogle = (googleUser) => {
        const mail = googleUser.profileObj.email;
        const familyName = googleUser.profileObj.familyName;
        const name = googleUser.profileObj.name;
        console.log("mail: " + mail + "family: " + familyName + "name: " + name);
        history.push("/hrpage");
    }

    return (
        <div>
            <GoogleLogin
                clientId="800585052945-t5qs2jgsad0gvnmeh9gr5jt78eqq61ep.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="hrpage" component={App} />
                </Route>
            </Router>
        </div>
    );
};
export default LoginPage