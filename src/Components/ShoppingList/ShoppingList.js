import React, { Component } from 'react';
import AddItemForm from './AddItemFom';


class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state= {
            items: [
                {name:"Cheese", qty: 3 },
                {name: "Milk", qty:6}
            ]
        }
        this.addItem = this.addItem.bind(this);
        
    }
    addItem(evt, newItem){
        this.setState(state =>({items: [...state.items, newItem]}))
    }

    renderItems(){
        return (
        <div>
            <ul>
            {
                this.state.items.map((item, i)=>(
                    <li key={i}>
                        {item.name} : {item.qty}
                    </li>
                ))
            }
            </ul>
        </div>
           
        )
    }
    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <AddItemForm addItem={this.addItem} />
            </div>
        )
    }
}
export default ShoppingList;