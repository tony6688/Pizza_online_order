import React, { Component } from 'react';
import Store from './Store'

class StorePane extends Component {
    renderStore(store){
        return <Store store={this.props.stores[store]} key={store} index={store}/>
    };
    render() {
        return (
            <div id = "stores-pane">
                <h1>Stores & Ovens</h1>
                <ul>
                    {Object.keys(this.props.stores).map(this.renderStore.bind(this))}
                </ul>
            </div>
        );
    }
}

export default StorePane;