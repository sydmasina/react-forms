import React, { Component } from 'react';

class AddItemForm extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", qty: 0}
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleInputChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleAddItem(evt){
        evt.preventDefault()
        this.props.addItem(evt, this.state)
    }
    render(){
        return (
            <div>
                <form>
                <label htmlFor='name'>Name: </label>
                <input onChange={this.handleInputChange} type='text' name='name' id='name' />
                <label htmlFor='qty'> Qty: </label>
                <input onChange={this.handleInputChange} type='number' name='qty' id='qty' />
                <button onClick={this.handleAddItem}>Add item</button>
                </form>
            </div>
        )
    }
}
export default AddItemForm;