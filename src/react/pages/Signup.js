import React from "react"

class Signup extends React.Component {
    render(){
        return(
            <React.Fragment>
            <input type="username" placeholder="Enter Username"></input>
            <input type="displayname" placeholder="Enter displayname"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <button type="Confirm">Sign Up Now!</button>
            </React.Fragment>
        )
    }
}

export default Signup