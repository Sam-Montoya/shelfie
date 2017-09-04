import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(){
        super();
        this.state = {
            bin : {
                "bin_id": null,
                "bin_name": null,
                "item_name": null,
                "price": null,
                "fk_shelf_id": null
            },
            notEdited : true
        }
    }

    componentDidMount(){
        let data;
        axios.get('http://localhost:3030/api/bin/' + this.props.match.params.id).then(response => response.data).then(data => {
            this.setState({
                bin: data[0]
            })
        });
        

    }

    edit(){
        this.setState({
            notEdited: false
        });
    }
    onChangeVal(val, prop){
        var tempBin = Object.assign({}, this.state.bin);
        tempBin[prop] = val;
        this.setState({
            bin: tempBin
        });
    }
    save(){
        let bin = {
            itemName : this.state.bin.item_name,
            itemPrice: this.state.bin.price,
        };
        axios.put('http://localhost:3030/api/bin/' + this.props.match.params.id, bin).then(response => response.data).then(() => {
            this.props.history.push('/shelf/'+ String(Math.floor(parseInt(this.props.match.params.id)/5)+1));
        });
    }
    delete(){
        let bin = {
            itemName : null,
            itemPrice: null,
        };
        axios.put('http://localhost:3030/api/bin/' + this.props.match.params.id, bin).then(response => response.data).then(() => {
            this.props.history.push('/shelf/'+ String(Math.floor(parseInt(this.props.match.params.id)/5)+1));
        });
    }

    render () {
        return (
            <div>
                <input ref="itemName" value={this.state.bin.item_name} disabled={this.state.notEdited} onChange={(e) => this.onChangeVal(e.target.value, "item_name")}/>
                <input ref="price" value={this.state.bin.price} disabled={this.state.notEdited} onChange={(e) => this.onChangeVal(e.target.value, "price")}/>
                <div>
                    {
                        this.state.notEdited
                        ?
                        <button onClick={() => this.edit()}>Edit</button>
                        :
                        <button onClick={() => this.save()}>Save</button>
                    }
                    <button>Delete</button>
                </div>
            </div>
        );
    }
}