import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(evt){
        this.setState({username: evt.target.value})
    }
    handlePasswordChange(evt){
        this.setState({password: evt.target.value})
    }

    handleFormSubmit(evt){
        evt.preventDefault()
        alert(`You typed: ${this.state.username}`)
        this.setState({username: "",  password: ""})
    }

    render(){
        return(
            <div>
                <h1>LOGIN</h1>
                <form>
                    <div>
                        <label>Username: </label>
                        <input
                         type='text'
                         value={this.state.username}
                         onChange={this.handleUsernameChange}
                         name="username" 
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                         type='password'
                         value={this.state.password}
                         onChange={this.handlePasswordChange}
                         name="password" 
                        />
                    </div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default LoginForm