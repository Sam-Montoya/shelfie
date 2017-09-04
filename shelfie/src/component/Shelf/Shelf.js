import './Shelf.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            shelfLetter : null,
            bins: [
                {
                    "bin_id": 1,
                    "bin_name": "Bin 1",
                    "item_name": 'First Item',
                    "price": '4.50',
                    "fk_shelf_id": null
                },
                {
                    "bin_id": 2,
                    "bin_name": "Bin 2",
                    "item_name": null,
                    "price": null,
                    "fk_shelf_id": null
                },
                {
                    "bin_id": 3,
                    "bin_name": "Bin 3",
                    "item_name": null,
                    "price": null,
                    "fk_shelf_id": null
                },
                {
                    "bin_id": 4,
                    "bin_name": "Bin 4",
                    "item_name": null,
                    "price": null,
                    "fk_shelf_id": null
                },
                {
                    "bin_id": 5,
                    "bin_name": "Bin 5",
                    "item_name": null,
                    "price": null,
                    "fk_shelf_id": null
                }
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3030/api/' + this.props.match.params.id + '/bins').then(response => {
            var binsCopy = Object.assign([], this.state.bins);
            var letter;

            if(response.data[0].fk_shelf_id === 1)
                letter='A'
            else if(response.data[0].fk_shelf_id === 2)
                letter='B'
            else if(response.data[0].fk_shelf_id === 3)
                letter='C'
            else if(response.data[0].fk_shelf_id === 4)
                letter='D'

            for (let i = 0; i <= 4; i++) {
                binsCopy[i] = response.data[i];
            }
            this.setState({
                bins: binsCopy,
                shelfLetter: letter
            })
            console.log(binsCopy);
        })
    }

    render() {
        var binArr = this.state.bins.map((bin, i) =>
            bin.item_name
                ?
                <Link key={i} to={'/edit/' + bin.bin_id} className='button'>{bin.bin_name}</Link>
                :
                <Link key={i} to={'/addBin/' + bin.bin_id} className='button_empty'>+ Add Inventory to Bin</Link>
        );

        return (
            <div className='container'>
                <div className='header'>
                    <div className='logo'>
                    <Link to='/'>
                    <img src={'https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png'} alt=''/>
                    </Link>
                    </div>
                    <h1>Shelf {this.state.shelfLetter}</h1>
                </div>
                <div className='show_buttons'>
                    {binArr}
                </div>
            </div>
        );
    }
}