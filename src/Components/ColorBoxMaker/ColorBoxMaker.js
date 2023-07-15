import React, { Component } from 'react'
import ColorBoxForm from './ColorBoxForm';

class ColorBoxMaker extends Component{
    constructor(props){
        super(props);
        this.state = {boxes: []};
        this.addBox = this.addBox.bind(this)
    }
    addBox(newBox){
        this.setState(state => ({boxes: [...state.boxes, newBox]}))
    }
    renderBoxes(){
        return(
            <ul>
                {
                    this.state.boxes.map((box, i)=>{
                        return (
                            <div key={i} style={{width: parseInt(box.width), height: parseInt(box.height), backgroundColor: box.bgcolor}}></div>
                        )
                    })
                }
               </ul>
        )
    }
    render(){
        return(
            <div>
                <h1>Color Box Maker</h1>
               <ColorBoxForm addBox={this.addBox}/>
               {this.renderBoxes()}
            </div>
        )
    }
}
export default ColorBoxMaker;