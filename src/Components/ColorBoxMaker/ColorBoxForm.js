import React, { Component } from 'react'

class ColorBoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {width:"", height:"", bgcolor:""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox(this.state)
    }
    render(){
        return(
            <form>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input onChange={this.handleInputChange} type='number' value={this.state.width} name="width" id="width" />
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input onChange={this.handleInputChange} type='number'  value={this.state.height} name="height" id="height" />
                </div>
                <div>
                    <label htmlFor="bgcolor">BackgroundColor: </label>
                    <input onChange={this.handleInputChange} type='text' value={this.state.bgcolor} name="bgcolor" id="bgcolor" />
                </div>
                <button onClick={this.handleSubmit}>Add Box</button>
            </form>
        )
    }
}
export default ColorBoxForm;