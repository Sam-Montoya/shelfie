import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            itemName: "",
            itemPrice: "",
        }
    }

    onChangeVal(val, prop){
        var tempState = Object.assign({}, this.state);
        tempState[prop] = val;
        this.setState(tempState);
    }

    save() {
        let bin = {
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
        };
        axios.put('http://localhost:3030/api/bin/' + this.props.match.params.id, bin).then
            (response => response.data).then(() => {
                this.props.history.push('/shelf/'+ String(Math.floor(parseInt(this.props.match.params.id)/5)+1));
            })
        
            

    }

    render() {
        return (
            <div>
                <input className='Name' value={this.state.itemName} onChange={(e)=> this.onChangeVal(e.target.value, "itemName")}/>
                <input className='Price' value={this.state.itemPrice} onChange={(e)=> this.onChangeVal(e.target.value, "itemPrice")}/>
                <button className='Save' onClick={(e) => this.save(this.state.itemName, this.state.itemPrice)}>
                    Save
                </button>
            </div>
        );
    }
}