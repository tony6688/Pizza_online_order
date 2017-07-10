require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import InboxPane from './InboxPane';
import samples from '../sample-data';
import ConversationPane from './ConversationPane';
import StorePane from './StorePane';

class AppComponent extends React.Component {
	constructor(){
		super();
		this.state = {
			humans:{},
			stores:{}
		}
	};
	loadSampleData(){
		// console.log(samples);
		// this.setState({'humans':samples['humans'], 'stores':samples['stores']});
		this.setState(samples, function(){
			// console.log(this.state.stores);
		})
	};
	// User navgate to converstion 
	componentWillMount(){
		if('human' in this.props.params){
			this.loadSampleData();
		}
	}

	// set parent state using funciton 
	// setSelectedConversation(human_index){
	// 	this.setState(
	// 		{
	// 			seletcedConversation: this.state.humans[human_index].conversations
	// 		}
	// 	)
	// };
  	render() {
	    return (
	      <div>
	      	<div id="header"></div>
	      	<button onClick={this.loadSampleData.bind(this)}>Load Sample Data</button>
	      	<div className="container">
	    		<div className = "column">
	    			{/*<InboxPane humans={this.state.humans} setSelectedConversation={this.setSelectedConversation.bind(this)} />*/}
					<InboxPane humans={this.state.humans} />
	    		</div>
	    		<div className = "column">
					{/*<ConversationPane conversations={this.state.seletcedConversation}/>*/}
					{this.props.children || "Select converstaion from the inbox"}
	    		</div>
	    		<div className = "column">
					<StorePane stores={this.state.stores}/>
	    		</div>

	      	</div>
	      </div>
	    );
  }
}

AppComponent.defaultProps = {
};

// AppComponent.prototype={

// };

export default AppComponent;
