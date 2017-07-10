import React, { Component } from 'react';
import {PureRenderMixin} from 'react-addons-pure-render-mixin';

class Store extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };
    checkStatus(status){
       return this.props.store.orders.filter((order)=>{
           return order.status == status;
       }).length
    };
    render() {
        return (
            <div>
                <h3>{this.props.index}</h3>  
                <p>Open: {this.checkStatus("Open")}</p>    
                <p>Confirmed: {this.checkStatus("Confirmed")}</p> 
                <p>In The Oven: {this.checkStatus("In The Oven")}</p> 
                <p>Delivered: {this.checkStatus("Delivered")}</p>           
            </div>
        );
    }
}

export default Store;