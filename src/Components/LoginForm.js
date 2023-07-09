import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
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
                         onChange={this.handleInputChange}
                         name="username" 
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                         type='password'
                         value={this.state.password}
                         onChange={this.handleInputChange}
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