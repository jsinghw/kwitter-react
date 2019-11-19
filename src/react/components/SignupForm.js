import React from "react";
import { Route, Link } from "react-router-dom";

class SignupForm extends React.Component {

    render() {
        return (
            <Route>
            <Link to="/SignUp">
            <button type="button">Sign up!</button>
            </Link>
            </Route>

        )
    }
}

export default SignupForm